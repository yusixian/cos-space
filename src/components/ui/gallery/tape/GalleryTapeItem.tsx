import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Card3d from '@/components/ui/card3d';
import Tooltip from '@/components/ui/tooltip';
import { scrollCardMoveUpVariants, scrollCardScaleVariants } from '@/constants/anim/variants';
import { Tape } from '@/constants/temp';
import { parseDate } from '@/lib/datetime';
import { cn } from '@/lib/utils';
import { galleryTapeDetailAtom, galleryTapeDetailDialogOpenAtom } from '@/store/gallery';
import { motion } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { FaCalendarDays } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';

type GalleryItemProps = {
  className?: string;
  index: number;
  data: Tape;
  width: number;
};
export default function GalleryTapeItem({ className, index, data, width }: GalleryItemProps) {
  const { tapeName, cover, org, createAt } = data;
  const setOpen = useSetAtom(galleryTapeDetailDialogOpenAtom);
  const setData = useSetAtom(galleryTapeDetailAtom);
  const onClick = useCallback(() => {
    setOpen(true);
    setData(data);
  }, [data, setData, setOpen]);
  return (
    <motion.div className="w-full" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
      <motion.div variants={scrollCardScaleVariants} className="origin-top">
        <Card
          onClick={onClick}
          className={cn('flex cursor-pointer flex-col gap-2', className)}
          style={{ width }}
          key={tapeName}
        >
          <CardHeader className="p-4 pb-0">{tapeName}</CardHeader>
          <div className="flex gap-2 px-4 text-xs text-muted-foreground">
            <Badge>
              <Tooltip placement="bottom" title="社团">
                <div className="flex-center gap-0.5">
                  <IoHome /> {org}
                </div>
              </Tooltip>
            </Badge>
            {createAt && (
              <Tooltip placement="bottom" title="购入日期">
                <p className="flex-center gap-1">
                  <FaCalendarDays />
                  {parseDate(createAt, 'YYYY-MM-DD')}
                </p>
              </Tooltip>
            )}
          </div>
          <CardContent className="mt-2 overflow-hidden rounded-lg p-0">
            <Card3d scaleNum={1.1}>
              <img
                src={cover}
                loading="lazy"
                alt={tapeName}
                className="h-auto min-h-[15.625rem] w-full rounded-lg object-cover"
              />
            </Card3d>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
