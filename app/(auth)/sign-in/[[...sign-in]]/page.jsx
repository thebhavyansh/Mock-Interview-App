import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (

<section className="bg-white dark:bg-gray-900 flex justify-center items-center">
  
        <SignIn />

</section>
);
  
  
}
