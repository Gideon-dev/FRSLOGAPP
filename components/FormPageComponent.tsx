"use client";
import { formSchema, FormValues } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Employee, Unit } from "@/lib/interface";
import { Select, SelectItem,SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { useEffect, useState } from "react";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import { PageSpinner } from "./PageLoadingSpinner";

const FormPageComponent = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const router = useRouter();
  const { isPending, startTransition } = usePageTransition();


    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        first_name: '',
        other_names:'',
        surname: '',
        email: '',
        phone:'',
        unit: undefined,
        command: '',
        post: '',
        next_of_kin_name: '',
        next_of_kin_phone: '',

      },
    });

    useEffect(() => {
      async function GetUnits(){
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        console.log('apiUrl')
        try {
          const res = await fetch(`${apiUrl}/units/`,{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const data = await res.json()
          setUnits(data)
          // console.error("Failed to fetch units", err)
        } catch (error) {
          console.error("Failed to fetch units", error)
        }
      }
      GetUnits();
    }, [])
    

    const onSubmit = async(values: FormValues) => {
      const apiRoute = process.env.NEXT_PUBLIC_API_URL;
      try{
        const res = await fetch(`${apiRoute}/employees/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (!res.ok) {
          toast('Failed to submit form.');
          throw new Error('Failed to submit form');
        }
        const result: Employee = await res.json();

        // ✅ Reset form
        form.reset();
        toast('Form submitted successfully!');
        startTransition(()=>{
          router.push(`/employee-detail/${result.employee_id}`);
        });
      }catch(error){
        console.error('Form submission error:', error)
        // ✅ Optional: toast error
        toast('Failed to submit form.')
      }
    }

    return(
      <div className="w-full h-auto">
        <span className="bg-center bg-cover bg-no-repeat w-[50px] h-[50px] block mx-auto" style={{backgroundImage:`url('/frsc-logo.webp')`}}/>
        <div className="flex gap-2 items-center mb-3 justify-center">
          <h1 className="font-bold">
            Federal Road Safety Corps 
          </h1>
          <p className="font-semibold">
            Special Marshals, RS7.14 CBD 
          </p>
          <p className="font-normal">
            Abuja
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md">
            {/* firstName */}
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* surName */}
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Surname</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Surname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* otherNames */}
            <FormField
              control={form.control}
              name="other_names"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Names</FormLabel>
                  <FormControl>
                    <Input placeholder="Your other names" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            {/* post */}
            <FormField
              control={form.control}
              name="post"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Post</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. worker"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* command */}
            <FormField
              control={form.control}
              name="command"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Command</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Science"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* units */}
            <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Unit</FormLabel>
                <Select onValueChange={field.onChange} value={String(field.value ?? "")}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a unit"/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  {units.map((unit: Unit) => (
                    <SelectItem key={unit.unit_id} value={String(unit.id)}>
                      {unit.name}
                    </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {
            /* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="08012345678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* NextofKinName */}
            <FormField
              control={form.control}
              name="next_of_kin_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next of Kin Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Next of Kin"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* NextofKinPhone*/}
            <FormField
              control={form.control}
              name="next_of_kin_phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next of Kin Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Next of Kin Phone"  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
          </form>
        </Form>
        <PageSpinner show={isPending}/>
      </div>
    )
}
export default FormPageComponent;