/**
 * 用户数据
 */
export interface UserData {
    /**
     * 页面title
     */
    title: string;

    /**
     * 社交链接
     */
    social: Social;

    /**
     * Banner横幅信息
     */
    banner: Banner;

    /**
     * 模块
     */
    modules: Module[];
}

/**
 * 社交
 */
export interface Social {
    github?: string;
    twitter?: string;
    linkedin?: string;

    // 其他
    [key: string]: any;
}

/**
 * Banner横幅
 */
export interface Banner {
    /**
     * 锚点
     */
    anchor: Anchor;

    // 其他
    [key: string]: any;
}

/**
 * 可定制模块
 */
export interface Module {
    /**
     * 是否展示
     */
    display: boolean;

    /**
     * 锚点
     */
    anchor: Anchor;

    /**
     * 标题
     */
    header: Header;

    // 其他
    [key: string]: any;
}

/**
 * 锚点
 */
export interface Anchor {
    /**
     * 对应页面元素id，用于Menu点击跳转
     */
    id: string;

    /**
     * 图标，用于Menu展示
     */
    icon: string;

    /**
     * 名称，用于Menu展示
     */
    name: string;
}

/**
 * 标题
 */
export interface Header {
    /**
     * 标题
     */
    title: string;

    /**
     * 副标题
     */
    subtitle: string;
}
