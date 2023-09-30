import React, { Suspense } from 'react';
import { Separator } from './ui/separator';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AgendaCard(props: {
  talk: {
    time: string;
    name: string;
    talkName: string;
  };
}) {
  return (
    <>
      <div className="flex items:left lg:items-center gap-5 w-full items p-3 border rounded-lg bg-background">
        <div className="text-font-semibold">{props.talk.time}</div>
        <div className="text-bold text-2xl w-1/2">{props.talk.talkName}</div>
        <div className="text-semibold text-xl w-2/5 text-muted-foreground">
          {props.talk.name}
        </div>
      </div>
    </>
  );
}
