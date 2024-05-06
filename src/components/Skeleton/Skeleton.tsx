type SkeletonProps = {
  count: number;
  type: 'banner' | 'item';
};

export default function Skeleton({ count = 1, type }: SkeletonProps) {
  console.log(count, type);

  // return <>
  // {count > 1 ? (<ul>
  //   {[Array(count)].map((_, index)=>{
  //     return <li key={index}>
  //       <SkeletonItem type={type} />
  //     </li>
  //   })}
  // </ul>)}</>;
}
