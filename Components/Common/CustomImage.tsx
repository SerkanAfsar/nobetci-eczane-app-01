import { cn } from "@/utils";

import Image from "next/image";

export type CustomImageProps = {
  title: string;
  src: any;
  layout?: string;
  width?: number;
  height?: number;
  className?: string;
};

export default function CustomImage({
  src,
  title,
  height,
  layout,
  width,
  className,
}: CustomImageProps) {
  return (
    <>
      {layout && layout == "fill" ? (
        <Image
          src={src}
          alt={title}
          layout="fill"
          className={cn(className && className)}
        />
      ) : (
        <Image
          src={src}
          alt={title}
          width={width!}
          height={height!}
          className={cn(className && className)}
        />
      )}
    </>
  );
}
