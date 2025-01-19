"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z, { number } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useParams, useSearchParams } from "next/navigation";
import ShortUniqueId from "short-unique-id";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const uid = new ShortUniqueId({ length: 7 });

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  age: z.number(),
  gender: z.string(),
  location: z.string(),
  education_level: z.string(),
  income: z.string(),
});

const FormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      gender: "male",
      age: 20,
      location: "",
      education_level: "",
      income: "high",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const searchParams = useSearchParams();

  const companyId = searchParams.get("companyid");

  const [userId, setUserId] = useState<string>("");
  const [gender, setGender] = useState<string>("male");
  const [location, setLocation] = useState<string>("urban");
  const [graduation, setgraduation] = useState<string>("graduated");
  const [income, setIncome] = useState<string>("high");
  const [age, setAge] = useState<number>(20);
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    console.log("hitted");
    try {
      const res = await fetch("https://postpulse.ronakpaul.com/save-user-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userData: [
            {
              user_id: userId,
              company_id: companyId,
              gender,
              age,
              location,
              education_level: graduation,
              income_range: income,
            }],
        }),
      });

      if(res.ok){
        setMsg("Survey Successfully Recorded!")
      }

      console.log(res);
    } catch (e) {}
  };

  useEffect(() => {
    const useridnew = uid.rnd();

    setUserId(useridnew);
  }, []);

  useEffect(() => {
    console.log(companyId);
  }, [companyId]);

  return (
    msg ? <div className="h-screen flex justify-center items-center">
        {msg}
    </div> :
    <div className="w-full flex flex-col justify-center items-center p-5 h-screen">
    <span className="text-2xl">Survey Form</span>
    <div className="w-[600px] border p-4 rounded-md mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    placeholder="for ex: 18"
                    {...field}
                    onChange={(e) => setAge(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-x-2">
            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={(value) => setLocation(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rural">Rural</SelectItem>
                      <SelectItem value="urban">Urban</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="education_level"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={(value) => setgraduation(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Education Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="graduated">graduated</SelectItem>
                    <SelectItem value="ungraduated">Ungraduated</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="income"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={(value) => setIncome(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Income Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  </div>
  );
};

export default FormComponent;
