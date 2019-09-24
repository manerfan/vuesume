export interface UserData {
    title: string;
    social: Social;
    banner: Banner;
    modules: Module[];
}

export interface Social {
    github?: string;
    twitter?: string;
    linkedin?: string;

    [key: string]: any;
}

export interface Banner {
    anchor: Anchor;

    [key: string]: any;
}

export interface Module {
    display: boolean;
    anchor: Anchor;
    header: Header;

    [key: string]: any;
}

export interface Anchor {
    id: string;
    icon: string;
    name: string;
}

export interface Header {
    title: string;
    subtitle: string;
}
