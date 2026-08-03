import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const services = [
  'House Power Washing',
  'Soft Washing',
  'Window Cleaning',
  'Gutter Cleaning',
  'Deck Cleaning',
  'Fence Cleaning',
  'Driveway & Sidewalk Cleaning',
  'Roof Cleaning',
  'Solar Panel Cleaning',
  'Graffiti Removal',
];

function formatUSPhone(value: string, isDeleting = false): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length === 0) return '';
  if (digits.length < 3) return `(${digits}`;
  if (digits.length === 3) return isDeleting ? `(${digits}` : `(${digits}) `;
  if (digits.length < 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  if (digits.length === 6) {
    return isDeleting
      ? `(${digits.slice(0, 3)}) ${digits.slice(3)}`
      : `(${digits.slice(0, 3)}) ${digits.slice(3)}-`;
  }
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Enter a valid 10-digit US phone number'),
  email: z.string().email('Please enter a valid email address'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });
  const { isSubmitting } = form.formState;

  const onSubmit = async (values: FormData) => {
    setSubmitError(null);
    try {
      const response = await fetch(
        'https://n8n-stripe.localpackmonster.com/webhook-test/form-submission',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        },
      );

      const result: { success: 'true' | 'false' } = await response.json();

      if (result.success !== 'true') {
        throw new Error('Failed to send message');
      }

      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will be in touch shortly.',
      });
      form.reset();
    } catch {
      setSubmitError('Something went wrong. Please try again or call us.');
    }
  };

  return (
    <div className="glassmorphism p-8 rounded-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    {...field}
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone *</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(123) 456-7890"
                    {...field}
                    onChange={(e) => {
                      const next = e.target.value;
                      const isDeleting = next.length < field.value.length;
                      field.onChange(formatUSPhone(next, isDeleting));
                    }}
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    {...field}
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Needed *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message / Additional Details</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Include your property address and any other details about your project..."
                    className="min-h-[120px]"
                    {...field}
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {submitError && (
            <p className="text-red-500 text-sm">{submitError}</p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full border-0 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 h-auto disabled:opacity-70"
            data-testid="button-submit-form"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              'Request My Free Estimate'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
