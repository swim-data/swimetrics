import { MoreHorizontal, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@repo/ui/components/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";

interface VideoGridElementProps {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    uploadDate: string;
    fileSize: string;
    onClick?: () => void;
}

export default function VideoGridElement({
    id,
    title,
    thumbnail,
    duration,
    uploadDate,
    fileSize,
    onClick,
}: Readonly<VideoGridElementProps>) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
            <div className="relative aspect-video overflow-hidden">
                <Image
                    src={thumbnail || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                        size="icon"
                        variant="secondary"
                        className="h-12 w-12 rounded-full opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
                        onClick={onClick}
                    >
                        <Play className="h-6 w-6" />
                        <span className="sr-only">Play video</span>
                    </Button>
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-black/70 px-1.5 py-0.5 text-xs text-white">
                    {duration}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-3">
                <div className="flex items-start justify-between">
                    <h3 className="font-medium line-clamp-1" title={title}>
                        {title}
                    </h3>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="-mr-2 h-8 w-8"
                            >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Download</DropdownMenuItem>
                            <DropdownMenuItem>Share</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{uploadDate}</span>
                    <span>•</span>
                    <span>{fileSize}</span>
                </div>
            </div>
        </div>
    );
}
