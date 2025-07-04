"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code,
  Book,
  PieChart,
  DollarSign,
  Fingerprint,
  Bell,
  Menu,
//   X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";



const features = [
  {
    icon: Code,
    title: "Services",
    description: "This Pokemon's cry is very loud and distracting",
  },
  {
    icon: DollarSign,
    title: "Free for everyone",
    description: "The fluid of Smeargle's tail secretions changes",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: Fingerprint,
    title: "Security",
    description: "The shell's rounded shape and the grooves on its",
  },
  {
    icon: PieChart,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <div className="bg-black">
      <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
       <div className="w-full max-w-full bg-black flex h-14 items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-4">
            <Link href={"/"} className="flex items-center space-x-2">
            
                <div className="p-1">
                   <Image 
                                  src="/Skilluxelogo3.png"
                                  width={40}
                                  height={40} alt={""}                 
                                         />
                </div>
                <h1 className="text-white text-xl font-bold">
                  SKILL<span className="text-blue-500">UXE</span>
                </h1> 
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className=" group text-white inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px]  p-4">
                      <div className="flex items-center justify-between mb-4 pb-2 hover:rounded-lg border-b">
                        <h4 className="text-lg font-medium ">Services</h4>
                        <Link
                          href="/features"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            href={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                <feature.icon className="h-6 w-6 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium mb-1">Get started</h4>
                            <p className="text-sm text-muted-foreground">
                              Their food sources have decreased, and their
                              numbers
                            </p>
                          </div>
                          <Button variant="secondary">Get started</Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/learn" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-black group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                       About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/academy" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Features
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex  mr-[2rem] items-center space-x-4">
            <Button variant="ghost" className="text-white bg-transparent"> Contact Us </Button>
            <Button className="bg-white text-black hover:bg-white/70 ">Sign up</Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden bg-white m-1">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      showFeatures && "rotate-180"
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="px-4 py-2 space-y-4">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={`/feature/${feature.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-start gap-4 py-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="p-2 bg-muted rounded-md">
                          <feature.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/learn"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Learn
                </Link>
                <Link
                  href="/academy"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Academy
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Log in
                  </Button>
                  <Button className="w-full" onClick={() => setOpen(false)}>
                    Sign up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
