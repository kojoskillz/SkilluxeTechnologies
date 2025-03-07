"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";




const words = 
`We're a team of innovative thinkers, creatives,
and tech enthusiasts passionate about crafting exceptional digital experiences. 
Our mission is to empower businesses to thrive 
in the digital age through cutting-edge web and app solutions.`;

export default function Aboutus() {
  return <TextGenerateEffect words={words} />;
};

export function MagicCardDemo() {
    const { theme } = useTheme();
    return (
      <Card>
        <MagicCard gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div>
                <h1></h1>
             </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign In</Button>
          </CardFooter>
        </MagicCard>
      </Card>
    );
  }
  