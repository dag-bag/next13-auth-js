"use client";
import { useRouter, useSearchParams } from 'next/navigation'

const ErrorPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const errMsg = searchParams.get('error');
  return (
    <>
    <div>
        <h1>ErrorPage</h1>
        <h2 style={{color: 'red'}}>Error: {errMsg}</h2>
        <button onClick={() => router.push('/')}>Go Home</button>
    </div>
    </>
  )
}

export default ErrorPage