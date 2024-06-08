import Link from "next/link";
import { getSlug } from "../../helpers/slugify";
import { getUsers } from "../../helpers/api";
import { Hero } from "../../components/Hero";
import { User } from "../../components/User";

export default async function Blog() {
  const users = await getUsers();
  return (
    <>
      <Hero title="Blog"/>e
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {users.map((post, index) => <User key={index} post={post} />)}
                    </div>
                </div>
            </section>   
    </>
  );
}