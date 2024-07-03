import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";

export default function SearchComponents() {
  return (
    <div>
      <input type="text" placeholder="An app to Design" className="max-w-60 pl-10 pr-16 py-3 rounded-full bg-[#39393f] text-white focus:outline-none  placeholder-gray-400" />
      <Button radius="full">
        <span className={title({ size: "litlesm" })}>Generate</span>
      </Button>
    </div>
  );
}
