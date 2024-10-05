import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  return (
    <div className="flex relative font-sans overflow-hidden items-center justify-between min-h-screen">
      <div className="relative w-full lg:w-1/2 flex items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 border-r-[1px] border-white/5">
        <div className="absolute inset-0 opacity-5 w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
       
        <div className="pl-4 z-20">
          <h1 className="text-5xl text-white mb-8 tracking-tighter">
            Hello <span className="bg-gradient-to-tr from-zinc-100 via-zinc-200/50 to-zinc-200/90 text-transparent bg-clip-text animate-gradient">human</span>
          </h1>
          <p className="text-white mb-8 text-lg tracking-tighter">Your network is your net worth.</p>
          <form className="space-y-4 mb-8 w-[130%] md:w-[180%]">
            <Input
              type="text"
              placeholder="Full Name"
              className="bg-white/10 text-white border-white/20"
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-white/10 text-white border-white/20"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-white/10 text-white border-white/20"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="bg-white/10 text-white border-white/20"
            />
            <Button className="w-full bg-white text-gray-900 hover:bg-gray-200 flex items-center justify-center gap-2 px-6 py-3">
              Sign Up
            </Button>
          </form>
          <p className="text-gray-400 text-sm">
            Already have an account? <Link href="/signin" className="text-white hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
      <div className="relative hidden lg:flex lg:w-1/2 flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        <span className="text-3xl leading-relaxed tracking-tighter mb-8 text-gray-300">
          Ready to make <span className="text-white font-bold">Network</span>?
        </span>
      </div>
    </div>
  );
};

export default SignUp;