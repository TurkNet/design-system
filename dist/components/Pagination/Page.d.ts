import { FC } from 'react';
interface PageProps {
    page: number;
    currentPage: number;
    onChange(page: number): void;
}
declare const Page: FC<PageProps>;
export default Page;
