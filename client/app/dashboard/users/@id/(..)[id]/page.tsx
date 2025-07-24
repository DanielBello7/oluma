'use client';

import { useParams } from 'next/navigation';

export default function InterceptingUserIdPage() {
  const { id } = useParams();
  return <div>intercepted User {id}</div>;
}
