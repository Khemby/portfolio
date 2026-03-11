"use client";

import { useState } from "react";
import { DotFlow, DotFlowProps } from "@/components/ui/dot-flow";
import { ContactModal } from "@/components/ui/contact-modal";

const pulse = [
    [],
    [24],
    [17, 23, 25, 31],
    [16, 18, 22, 26, 30, 32],
    [9, 11, 15, 19, 29, 33, 37, 39],
    [16, 18, 22, 26, 30, 32],
    [17, 23, 25, 31],
    [24],
    [],
];

const sweep = [
    [0, 7, 14, 21, 28, 35, 42],
    [1, 8, 15, 22, 29, 36, 43],
    [2, 9, 16, 23, 30, 37, 44],
    [3, 10, 17, 24, 31, 38, 45],
    [4, 11, 18, 25, 32, 39, 46],
    [5, 12, 19, 26, 33, 40, 47],
    [6, 13, 20, 27, 34, 41, 48],
    [5, 12, 19, 26, 33, 40, 47],
    [4, 11, 18, 25, 32, 39, 46],
    [3, 10, 17, 24, 31, 38, 45],
    [2, 9, 16, 23, 30, 37, 44],
    [1, 8, 15, 22, 29, 36, 43],
];

const fill = [
    [24],
    [17, 23, 25, 31],
    [10, 16, 18, 22, 26, 30, 32, 38],
    [3, 9, 11, 15, 19, 29, 33, 37, 39, 45],
    [2, 4, 8, 12, 14, 20, 28, 34, 36, 40, 44, 46],
    [1, 5, 7, 13, 21, 27, 35, 41, 43, 47],
    [0, 6, 42, 48],
    [1, 5, 7, 13, 21, 27, 35, 41, 43, 47],
    [2, 4, 8, 12, 14, 20, 28, 34, 36, 40, 44, 46],
    [3, 9, 11, 15, 19, 29, 33, 37, 39, 45],
    [10, 16, 18, 22, 26, 30, 32, 38],
    [17, 23, 25, 31],
    [24],
    [],
];

const heroItems: DotFlowProps["items"] = [
    { title: "Get in Touch", frames: sweep, duration: 80 },
    { title: "Open to Work", frames: pulse, duration: 120, repeatCount: 2 },
    { title: "Let's Build", frames: fill, duration: 100 },
];

const contactItems: DotFlowProps["items"] = [
    { title: "Email Me", frames: sweep, duration: 80 },
    { title: "Hire Me", frames: pulse, duration: 120, repeatCount: 2 },
    { title: "Let's Chat", frames: fill, duration: 100 },
];

type ContactButtonProps = {
    variant?: "hero" | "contact";
};

export function ContactButton({ variant = "hero" }: ContactButtonProps) {
    const [open, setOpen] = useState(false);
    const items = variant === "contact" ? contactItems : heroItems;

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            >
                <DotFlow items={items} />
            </button>
            {open && <ContactModal onClose={() => setOpen(false)} />}
        </>
    );
}
