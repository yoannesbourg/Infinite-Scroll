export interface image {
    type: string;
    id: string;
    title: string;
    author: string;
    created_at: Date;
    main_attachment: {
        big: string;
        small: string;
    };
    likes_count: number;
    liked: boolean;
    price: number;
}
