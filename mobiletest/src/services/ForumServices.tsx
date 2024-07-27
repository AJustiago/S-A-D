export interface ForumPost {
    username: string;
    id: number;
    title: string;
    description: string;
    upCount: number,
    downCount: number,
    count: number;
}

const dummyData: ForumPost[] = [
{
    username: 'A',
    id: 1,
    title: 'What is React Native?',
    description: 'React Native is a popular framework for building mobile applications using React.',
    upCount: 1,
    downCount: 2,
    count: 3,
},
{
    username: 'A',
    id: 2,
    title: 'How to use Hooks in React?',
    description: 'Hooks are a new feature in React that let you use state and other React features without writing a class.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
{
    username: 'A',
    id: 3,
    title: 'Understanding Redux',
    description: 'Redux is a predictable state container for JavaScript apps, commonly used with React.',
    upCount: 1,
    downCount: 2,
    count: 2,
},
{
    username: 'A',
    id: 4,
    title: 'Best practices for React Native development',
    description: 'Learn about best practices to optimize your React Native applications for performance and maintainability.',
    upCount: 1,
    downCount: 2,
    count: 1,
},
{
    username: 'A',
    id: 5,
    title: 'What is Expo?',
    description: 'Expo is a framework and a platform for universal React applications, providing a set of tools and services for building, deploying, and developing React Native apps.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
{
    username: 'A',
    id: 6,
    title: 'What is React Native?',
    description: 'React Native is a popular framework for building mobile applications using React.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
{
    username: 'A',
    id: 7,
    title: 'How to use Hooks in React?',
    description: 'Hooks are a new feature in React that let you use state and other React features without writing a class.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
{
    username: 'A',
    id: 8,
    title: 'Understanding Redux',
    description: 'Redux is a predictable state container for JavaScript apps, commonly used with React.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
{
    username: 'A',
    id: 9,
    title: 'Best practices for React Native development',
    description: 'Learn about best practices to optimize your React Native applications for performance and maintainability.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
{
    username: 'A',
    id: 10,
    title: 'What is Expo?',
    description: 'Expo is a framework and a platform for universal React applications, providing a set of tools and services for building, deploying, and developing React Native apps.',
    upCount: 1,
    downCount: 2,
    count: 0,
},
];

export const fetchForumData = async (): Promise<ForumPost[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return dummyData;
};
