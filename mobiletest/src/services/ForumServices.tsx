export interface ForumPost {
    username: string;
    id: number;
    title: string;
    description: string;
    upCount: number;
    downCount: number;
    count: number;
}

export interface ForumDetail {
    username: string;
    id: number;
    title: string;
    description: string;
    upCount: number;
    downCount: number;
    count: number;
    reply: ForumPost[]
}

const dummyData: ForumPost[] = [
{
    username: 'John Doe',
    id: 1,
    title: 'Stairwell door stuck',
    description: 'Emergency stairwell door in tower C is stuck.',
    upCount: 8,
    downCount: 0,
    count: 2,
},
{
    username: 'Lenny',
    id: 2,
    title: 'Missing fire extinguisher',
    description: 'In Floor 10th tower C missing fire extinguisher',
    upCount: 5,
    downCount: 2,
    count: 0,
},
{
    username: 'Jane Doe',
    id: 3,
    title: 'Emergency Exit Stuck',
    description: 'Tower B Emerygency Exit can\'t Open',
    upCount: 3,
    downCount: 2,
    count: 0,
},
];


const dummyDetail: ForumDetail =
{
    username: 'John Doe',
    id: 1,
    title: 'Stairwell door stuck',
    description: 'Emergency stairwell door in tower C is stuck.',
    upCount: 8,
    downCount: 0,
    count: 2,
    reply: [
        {
            username: 'Jack',
            id: 1,
            title: 'Stairwell door stuck',
            description: 'Yes, i\'ve been visited there before and it stuck',
            upCount: 3,
            downCount: 0,
            count: 0,
        },
        {
            username: 'Erica',
            id: 2,
            title: 'Stairwell door stuck',
            description: 'it has been more than a week',
            upCount: 1,
            downCount: 0,
            count: 0,
        }
    ]
}



export const fetchForumData = async (): Promise<ForumPost[]> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return dummyData;
};


export const fetchForumDetail = async (): Promise<ForumDetail> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return dummyDetail;
}