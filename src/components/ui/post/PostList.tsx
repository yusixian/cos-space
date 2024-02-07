'use client';

import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import EmptySvg from '@/components/svg/EmptySvg';
import { PostData } from '@/lib/api/type';
import { twMerge } from 'tailwind-merge';
import Loading from '../loading';
import PostItemCard from './PostItemCard';
import Divider from '../divider';

type PostListProps = {
  data?: PostData[];
  isLoading?: boolean;
  className?: string;
};

export default function PostList({ data, isLoading, className }: PostListProps) {
  return (
    <div className={twMerge('flex flex-col gap-8 pt-8', className)}>
      <Divider>文章列表</Divider>
      <ErrorBoundary>
        {isLoading ? (
          <div className="flex flex-col items-center gap-2 text-foreground/30">
            <Loading className="h-10 w-10" />
          </div>
        ) : data?.length ? (
          <div className="flex flex-col gap-8 px-5">
            {data.map((v, i) => (
              <PostItemCard key={i} data={v} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-foreground/30">
            <EmptySvg className="fill-foreground/20" />
            还没有发表文章哦～
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
}
