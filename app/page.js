import Test from "@/components/Test";
import { getCategory, getCourses } from "@/queries/courses";

export default async function Home() {
  const data = await getCourses();
  const data2 = await getCategory();
  console.log(data);
  console.log("data", data2);
  return <Test />;
}
