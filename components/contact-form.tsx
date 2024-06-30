"use client"

import { useForm } from "react-hook-form"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "@/components/ui/textarea"
import { GrStatusGood } from "react-icons/gr";

const FormSchema = z.object({
  name: z.string().min(1, { message: "This field must not be empty." }),
  email: z.string().email("Invalid email."),
  message: z.string().min(10, {message: "Message must be at least 10 characters.",})
})


export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          description: (
            <div className='flex items-center'>
              <GrStatusGood className=" text-success text-4xl pr-2 mb-2" />
              Your message has been sent.
            </div>

          ),
        })
        form.reset()
      }else{
        toast({
          title: 'Error sending message',
          description: (
            <pre className="rounded-md bg-error">
              <code className="text-error-foreground">Status code: { response.status }</code>
            </pre>
          ),
        })
      }
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false);
    }
  }


  return (
    <section className='grid grid-cols-1 my-10'>
      <div className='flex justify-center items-center text-xl font-black py-3'>Contact Me</div>
      <div className="flex justify-center items-center mx-auto w-2/3">
        <Card className="w-full my-3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="min-h-[500px] space-y-6 py-10 px-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-primary-foreground'>Name</FormLabel>
                    <FormControl>
                      <Input className='text-foreground' placeholder="enter your full name" {...field} />
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
                    <FormLabel className='text-primary-foreground'>Email</FormLabel>
                    <FormControl>
                      <Input className='text-foreground' placeholder="enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-primary-foreground'>Message</FormLabel>
                    <FormControl>
                      <Textarea className='text-foreground h-60' placeholder="drop your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className='w-full uppercase'>
                {isSubmitting ? 'Sending...' : 'Send '}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  )
}
