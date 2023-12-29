export const options = [
    {
        label: "默认",
        value: 0,
    },
    {
        label: "分行",
        value: 1,
    },
];

export const modes = [
    {
        label: "思维导图",
        value: 0,
    },
    {
        label: "提问",
        value: 1,
    },
    {
        label: "遮挡",
        value: 2,
    },
];
export enum FontType {
    Bold = 'bold',
    Decoration = 'decoration',
    Background = 'background',
    Color = 'color',
    Size = 'size'
}
export const hightLight = [
    {
        type: 'bold',
        label: '粗细'
    },
    {
        type: 'decoration',
        label: '下划线'
    },
    {
        type: 'background',
        label: '背景'
    }, {
        type: 'color',
        label: '颜色'
    }, {
        type: 'size',
        label: '大小'
    }
]
export interface Paragraph { word: string, checked?: boolean }
export interface Data {
    displayMode: number;
    rememberMode: number;
    text: string;
    checkeds: Paragraph[];
    list: Paragraph[]
}