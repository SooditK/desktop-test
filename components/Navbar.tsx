import Image from "next/image";
import { IndexProps } from "../interfaces/IndexProps";

export default function Navbar({ data }: IndexProps) {
  return (
    <div className="bg-black text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center text-4xl font-bold">
              Edvora
            </div>
          </div>
          <div className="flex">
            <span className="text-base gap-x-4 flex justify-center items-center font-semibold">
              {data.name}
              <span>
                <Image
                  src={data.url}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
