type Course = {
  id: number;
  title: string;
  description: string;
  expectedOutput: string;
};

export const sampleData: Course[] = [
  {
    id: 1,
    title: "Circle",
    description: "To create a circle...",
    expectedOutput: `<svg><circle cx="50" cy="50" r="40" /></svg>`,
  },
];
