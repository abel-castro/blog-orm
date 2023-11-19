import { AppDataSource } from "./data-source";
import { Post } from "./entity/Post";

let data = [
    {
        id: 1,
        title: 'Lorem Ipsum 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Yes',
    },
    {
        id: 2,
        title: 'Lorem Ipsum 2',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export async function getAll(): Promise<Post[]> {
    const postRepository = AppDataSource.getRepository(Post);
    return await postRepository.find();
}

export async function getAllStream() {
    return await AppDataSource.getRepository(Post).createQueryBuilder("post").stream();
}