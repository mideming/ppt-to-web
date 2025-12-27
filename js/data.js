// 崇明岛乡村住宅项目数据
const projectData = {
    // 项目基本信息
    projectInfo: {
        title: "崇明岛乡村住宅",
        subtitle: "属于一群人的乡村记忆",
        englishTitle: "Chongming Island",
        description: "创新产品课题研发｜乡村住宅研究报告"
    },

    // 诉求部分数据 - 基于实际文件夹结构
    demands: {
        title: "诉求",
        // 6个子模块的轮播图数据（基于实际文件夹）
        carousels: {
            tab1: {
                title: "自建房现状",
                images: [
                    {
                        id: 1,
                        title: "自建房现状",
                        description: "展示崇明岛自建房的当前状况和发展需求",
                        image: "images/诉求/1_自建房现状/1_image.png"
                    },
                    {
                        id: 2,
                        title: "现状分析",
                        description: "分析自建房存在的问题和改进方向",
                        image: "images/诉求/1_自建房现状/2_image.png"
                    }
                ]
            },
            tab2: {
                title: "政策支持",
                images: [
                    {
                        id: 1,
                        title: "政策支持",
                        description: "崇明岛自建房相关政策法规和支持措施",
                        image: "images/诉求/2_政策支持/1_image.png"
                    },
                    {
                        id: 2,
                        title: "政策详情",
                        description: "具体的政策内容和实施要求",
                        image: "images/诉求/2_政策支持/2_image.png"
                    }
                ]
            },
            tab3: {
                title: "年龄结构",
                images: [
                    {
                        id: 1,
                        title: "年龄结构分析",
                        description: "不同年龄群体的居住需求分析",
                        image: "images/诉求/3_年龄结构/1_image.png"
                    },
                    {
                        id: 2,
                        title: "老年群体需求",
                        description: "老年群体的特殊居住需求",
                        image: "images/诉求/3_年龄结构/2_image.png"
                    },
                    {
                        id: 3,
                        title: "中青年群体需求",
                        description: "中青年群体的现代化居住需求",
                        image: "images/诉求/3_年龄结构/3_image.png"
                    },
                    {
                        id: 4,
                        title: "青少年儿童需求",
                        description: "青少年和儿童的安全成长需求",
                        image: "images/诉求/3_年龄结构/4_image.png"
                    }
                ]
            },
            tab4: {
                title: "使用需求",
                images: [
                    {
                        id: 1,
                        title: "使用需求分析",
                        description: "不同功能空间的使用需求",
                        image: "images/诉求/4_使用需求/1_image.png"
                    },
                    {
                        id: 2,
                        title: "生活空间需求",
                        description: "客厅、卧室等生活空间的需求",
                        image: "images/诉求/4_使用需求/2_image.png"
                    },
                    {
                        id: 3,
                        title: "功能空间需求",
                        description: "厨房、卫生间等功能空间的需求",
                        image: "images/诉求/4_使用需求/3_image.png"
                    },
                    {
                        id: 4,
                        title: "储藏空间需求",
                        description: "储物和储藏空间的需求",
                        image: "images/诉求/4_使用需求/4_image.png"
                    },
                    {
                        id: 5,
                        title: "特殊需求",
                        description: "特殊人群和特殊功能的需求",
                        image: "images/诉求/4_使用需求/5_image.png"
                    }
                ]
            },
            tab5: {
                title: "风格喜好",
                images: [
                    {
                        id: 1,
                        title: "风格喜好分析",
                        description: "不同人群的建筑风格偏好",
                        image: "images/诉求/5_风格喜好/1_image.png"
                    },
                    {
                        id: 2,
                        title: "传统风格",
                        description: "传统中式建筑风格喜好",
                        image: "images/诉求/5_风格喜好/2_image.png"
                    },
                    {
                        id: 3,
                        title: "现代风格",
                        description: "现代简约建筑风格喜好",
                        image: "images/诉求/5_风格喜好/3_image.png"
                    },
                    {
                        id: 4,
                        title: "混合风格",
                        description: "中西结合的建筑风格喜好",
                        image: "images/诉求/5_风格喜好/4_image.png"
                    },
                    {
                        id: 5,
                        title: "个性化风格",
                        description: "个性化定制风格喜好",
                        image: "images/诉求/5_风格喜好/5_image.png"
                    },
                    {
                        id: 6,
                        title: "风格趋势",
                        description: "当前流行的建筑风格趋势",
                        image: "images/诉求/5_风格喜好/6_image.png"
                    }
                ]
            },
            tab6: {
                title: "预算范围",
                images: [
                    {
                        id: 1,
                        title: "预算范围分析",
                        description: "不同预算范围的建房方案",
                        image: "images/诉求/6_预算范围/1_image.png"
                    },
                    {
                        id: 2,
                        title: "预算分配",
                        description: "各项费用的预算分配比例",
                        image: "images/诉求/6_预算范围/2_image.png"
                    }
                ]
            }
        }
    },

    // 设计部分数据
    // 设计部分数据 - 基于实际文件夹结构（比诉求多一级）
    design: {
        title: "设计",
        // 2个一级切换：平面设计、立面设计
        primaryTabs: {
            tab1: {
                title: "平面设计",
                // 3个二级切换：设计原则、功能布局、平面设计
                secondaryTabs: {
                    tab1_1: {
                        title: "设计原则",
                        images: [
                            {
                                id: 1,
                                title: "设计原则",
                                description: "平面设计的基本原则和指导思想",
                                image: "images/设计/1_平面设计/1_设计原则/image.png"
                            }
                        ]
                    },
                    tab1_2: {
                        title: "功能布局",
                        images: [
                            {
                                id: 1,
                                title: "功能布局 1",
                                description: "功能布局设计示意图",
                                image: "images/设计/1_平面设计/2_功能布局/1_image.png"
                            },
                            {
                                id: 2,
                                title: "功能布局 2",
                                description: "功能分区规划",
                                image: "images/设计/1_平面设计/2_功能布局/2_image.png"
                            },
                            {
                                id: 3,
                                title: "功能布局 3",
                                description: "空间流线设计",
                                image: "images/设计/1_平面设计/2_功能布局/3_image.png"
                            },
                            {
                                id: 4,
                                title: "功能布局 4",
                                description: "动线规划示意图",
                                image: "images/设计/1_平面设计/2_功能布局/4_image.png"
                            },
                            {
                                id: 5,
                                title: "功能布局 5",
                                description: "功能区域划分",
                                image: "images/设计/1_平面设计/2_功能布局/5_image.png"
                            },
                            {
                                id: 6,
                                title: "功能布局 6",
                                description: "空间利用方案",
                                image: "images/设计/1_平面设计/2_功能布局/6_image.png"
                            },
                            {
                                id: 7,
                                title: "功能布局 7",
                                description: "功能布局总结",
                                image: "images/设计/1_平面设计/2_功能布局/7_image.png"
                            }
                        ]
                    },
                    tab1_3: {
                        title: "平面设计",
                        images: [
                            {
                                id: 1,
                                title: "平面设计 1",
                                description: "平面设计方案 1",
                                image: "images/设计/1_平面设计/3_平面设计/1_image.png"
                            },
                            {
                                id: 2,
                                title: "平面设计 2",
                                description: "平面设计方案 2",
                                image: "images/设计/1_平面设计/3_平面设计/2_image.png"
                            },
                            {
                                id: 3,
                                title: "平面设计 3",
                                description: "平面设计方案 3",
                                image: "images/设计/1_平面设计/3_平面设计/3_image.png"
                            },
                            {
                                id: 4,
                                title: "平面设计 4",
                                description: "平面设计方案 4",
                                image: "images/设计/1_平面设计/3_平面设计/4_image.png"
                            },
                            {
                                id: 5,
                                title: "平面设计 5",
                                description: "平面设计方案 5",
                                image: "images/设计/1_平面设计/3_平面设计/5_image.png"
                            },
                            {
                                id: 6,
                                title: "平面设计 6",
                                description: "平面设计方案 6",
                                image: "images/设计/1_平面设计/3_平面设计/6_image.png"
                            },
                            {
                                id: 7,
                                title: "平面设计 7",
                                description: "平面设计方案 7",
                                image: "images/设计/1_平面设计/3_平面设计/7_image.png"
                            },
                            {
                                id: 8,
                                title: "平面设计 8",
                                description: "平面设计方案 8",
                                image: "images/设计/1_平面设计/3_平面设计/8_image.png"
                            },
                            {
                                id: 9,
                                title: "平面设计 9",
                                description: "平面设计方案 9",
                                image: "images/设计/1_平面设计/3_平面设计/9_image.png"
                            },
                            {
                                id: 10,
                                title: "平面设计 10",
                                description: "平面设计方案 10",
                                image: "images/设计/1_平面设计/3_平面设计/10_image.png"
                            },
                            {
                                id: 11,
                                title: "平面设计 11",
                                description: "平面设计方案 11",
                                image: "images/设计/1_平面设计/3_平面设计/11_image.png"
                            },
                            {
                                id: 12,
                                title: "平面设计 12",
                                description: "平面设计方案 12",
                                image: "images/设计/1_平面设计/3_平面设计/12_image.png"
                            },
                            {
                                id: 13,
                                title: "平面设计 13",
                                description: "平面设计方案 13",
                                image: "images/设计/1_平面设计/3_平面设计/13_image.png"
                            },
                            {
                                id: 14,
                                title: "平面设计 14",
                                description: "平面设计方案 14",
                                image: "images/设计/1_平面设计/3_平面设计/14_image.png"
                            },
                            {
                                id: 15,
                                title: "平面设计 15",
                                description: "平面设计方案 15",
                                image: "images/设计/1_平面设计/3_平面设计/15_image.png"
                            },
                            {
                                id: 16,
                                title: "平面设计 16",
                                description: "平面设计方案 16",
                                image: "images/设计/1_平面设计/3_平面设计/16_image.png"
                            },
                            {
                                id: 17,
                                title: "平面设计 17",
                                description: "平面设计方案 17",
                                image: "images/设计/1_平面设计/3_平面设计/17_image.png"
                            },
                            {
                                id: 18,
                                title: "平面设计 18",
                                description: "平面设计方案 18",
                                image: "images/设计/1_平面设计/3_平面设计/18_image.png"
                            },
                            {
                                id: 19,
                                title: "平面设计 19",
                                description: "平面设计方案 19",
                                image: "images/设计/1_平面设计/3_平面设计/19_image.png"
                            },
                            {
                                id: 20,
                                title: "平面设计 20",
                                description: "平面设计方案 20",
                                image: "images/设计/1_平面设计/3_平面设计/20_image.png"
                            },
                            {
                                id: 21,
                                title: "平面设计 21",
                                description: "平面设计方案 21",
                                image: "images/设计/1_平面设计/3_平面设计/21_image.png"
                            },
                            {
                                id: 22,
                                title: "平面设计 22",
                                description: "平面设计方案 22",
                                image: "images/设计/1_平面设计/3_平面设计/22_image.png"
                            },
                            {
                                id: 23,
                                title: "平面设计 23",
                                description: "平面设计方案 23",
                                image: "images/设计/1_平面设计/3_平面设计/23_image.png"
                            },
                            {
                                id: 24,
                                title: "平面设计 24",
                                description: "平面设计方案 24",
                                image: "images/设计/1_平面设计/3_平面设计/24_image.png"
                            },
                            {
                                id: 25,
                                title: "平面设计 25",
                                description: "平面设计方案 25",
                                image: "images/设计/1_平面设计/3_平面设计/25_image.png"
                            },
                            {
                                id: 26,
                                title: "平面设计 26",
                                description: "平面设计方案 26",
                                image: "images/设计/1_平面设计/3_平面设计/26_image.png"
                            },
                            {
                                id: 27,
                                title: "平面设计 27",
                                description: "平面设计方案 27",
                                image: "images/设计/1_平面设计/3_平面设计/27_image.png"
                            },
                            {
                                id: 28,
                                title: "平面设计 28",
                                description: "平面设计方案 28",
                                image: "images/设计/1_平面设计/3_平面设计/28_image.png"
                            },
                            {
                                id: 29,
                                title: "平面设计 29",
                                description: "平面设计方案 29",
                                image: "images/设计/1_平面设计/3_平面设计/29_image.png"
                            },
                            {
                                id: 30,
                                title: "平面设计 30",
                                description: "平面设计方案 30",
                                image: "images/设计/1_平面设计/3_平面设计/30_image.png"
                            }
                        ]
                    }
                }
            },
            tab2: {
                title: "立面设计",
                // 3个二级切换：设计要点、设计模块、风格模式
                secondaryTabs: {
                    tab2_1: {
                        title: "设计要点",
                        images: [
                            {
                                id: 1,
                                title: "设计要点 1",
                                description: "立面设计要点示意图",
                                image: "images/设计/2_立面设计/1_设计要点/1_image.png"
                            },
                            {
                                id: 2,
                                title: "设计要点 2",
                                description: "立面设计关键要素",
                                image: "images/设计/2_立面设计/1_设计要点/2_image.png"
                            }
                        ]
                    },
                    tab2_2: {
                        title: "设计模块",
                        images: [
                            {
                                id: 1,
                                title: "设计模块 1",
                                description: "立面设计模块示意图",
                                image: "images/设计/2_立面设计/2_设计模块/1_image.png"
                            },
                            {
                                id: 2,
                                title: "设计模块 2",
                                description: "立面模块组合方式",
                                image: "images/设计/2_立面设计/2_设计模块/2_image.png"
                            }
                        ]
                    },
                    tab2_3: {
                        title: "风格模式",
                        images: [
                            {
                                id: 1,
                                title: "风格模式 1",
                                description: "立面风格模式 1",
                                image: "images/设计/2_立面设计/3_风格模式/1_image.png"
                            },
                            {
                                id: 2,
                                title: "风格模式 2",
                                description: "立面风格模式 2",
                                image: "images/设计/2_立面设计/3_风格模式/2_image.png"
                            },
                            {
                                id: 3,
                                title: "风格模式 3",
                                description: "立面风格模式 3",
                                image: "images/设计/2_立面设计/3_风格模式/3_image.png"
                            },
                            {
                                id: 4,
                                title: "风格模式 4",
                                description: "立面风格模式 4",
                                image: "images/设计/2_立面设计/3_风格模式/4_image.png"
                            },
                            {
                                id: 5,
                                title: "风格模式 5",
                                description: "立面风格模式 5",
                                image: "images/设计/2_立面设计/3_风格模式/5_image.png"
                            },
                            {
                                id: 6,
                                title: "风格模式 6",
                                description: "立面风格模式 6",
                                image: "images/设计/2_立面设计/3_风格模式/6_image.png"
                            },
                            {
                                id: 7,
                                title: "风格模式 7",
                                description: "立面风格模式 7",
                                image: "images/设计/2_立面设计/3_风格模式/7_image.png"
                            },
                            {
                                id: 8,
                                title: "风格模式 8",
                                description: "立面风格模式 8",
                                image: "images/设计/2_立面设计/3_风格模式/8_image.png"
                            },
                            {
                                id: 9,
                                title: "风格模式 9",
                                description: "立面风格模式 9",
                                image: "images/设计/2_立面设计/3_风格模式/9_image.png"
                            },
                            {
                                id: 10,
                                title: "风格模式 10",
                                description: "立面风格模式 10",
                                image: "images/设计/2_立面设计/3_风格模式/10_image.png"
                            },
                            {
                                id: 11,
                                title: "风格模式 11",
                                description: "立面风格模式 11",
                                image: "images/设计/2_立面设计/3_风格模式/11_image.png"
                            },
                            {
                                id: 12,
                                title: "风格模式 12",
                                description: "立面风格模式 12",
                                image: "images/设计/2_立面设计/3_风格模式/12_image.png"
                            },
                            {
                                id: 13,
                                title: "风格模式 13",
                                description: "立面风格模式 13",
                                image: "images/设计/2_立面设计/3_风格模式/13_image.png"
                            },
                            {
                                id: 14,
                                title: "风格模式 14",
                                description: "立面风格模式 14",
                                image: "images/设计/2_立面设计/3_风格模式/14_image.png"
                            },
                            {
                                id: 15,
                                title: "风格模式 15",
                                description: "立面风格模式 15",
                                image: "images/设计/2_立面设计/3_风格模式/15_image.png"
                            },
                            {
                                id: 16,
                                title: "风格模式 16",
                                description: "立面风格模式 16",
                                image: "images/设计/2_立面设计/3_风格模式/16_image.png"
                            },
                            {
                                id: 17,
                                title: "风格模式 17",
                                description: "立面风格模式 17",
                                image: "images/设计/2_立面设计/3_风格模式/17_image.png"
                            },
                            {
                                id: 18,
                                title: "风格模式 18",
                                description: "立面风格模式 18",
                                image: "images/设计/2_立面设计/3_风格模式/18_image.png"
                            },
                            {
                                id: 19,
                                title: "风格模式 19",
                                description: "立面风格模式 19",
                                image: "images/设计/2_立面设计/3_风格模式/19_image.png"
                            },
                            {
                                id: 20,
                                title: "风格模式 20",
                                description: "立面风格模式 20",
                                image: "images/设计/2_立面设计/3_风格模式/20_image.png"
                            },
                            {
                                id: 21,
                                title: "风格模式 21",
                                description: "立面风格模式 21",
                                image: "images/设计/2_立面设计/3_风格模式/21_image.png"
                            },
                            {
                                id: 22,
                                title: "风格模式 22",
                                description: "立面风格模式 22",
                                image: "images/设计/2_立面设计/3_风格模式/22_image.png"
                            },
                            {
                                id: 23,
                                title: "风格模式 23",
                                description: "立面风格模式 23",
                                image: "images/设计/2_立面设计/3_风格模式/23_image.png"
                            },
                            {
                                id: 24,
                                title: "风格模式 24",
                                description: "立面风格模式 24",
                                image: "images/设计/2_立面设计/3_风格模式/24_image.png"
                            },
                            {
                                id: 25,
                                title: "风格模式 25",
                                description: "立面风格模式 25",
                                image: "images/设计/2_立面设计/3_风格模式/25_image.png"
                            },
                            {
                                id: 26,
                                title: "风格模式 26",
                                description: "立面风格模式 26",
                                image: "images/设计/2_立面设计/3_风格模式/26_image.png"
                            },
                            {
                                id: 27,
                                title: "风格模式 27",
                                description: "立面风格模式 27",
                                image: "images/设计/2_立面设计/3_风格模式/27_image.png"
                            },
                            {
                                id: 28,
                                title: "风格模式 28",
                                description: "立面风格模式 28",
                                image: "images/设计/2_立面设计/3_风格模式/28_image.png"
                            },
                            {
                                id: 29,
                                title: "风格模式 29",
                                description: "立面风格模式 29",
                                image: "images/设计/2_立面设计/3_风格模式/29_image.png"
                            },
                            {
                                id: 30,
                                title: "风格模式 30",
                                description: "立面风格模式 30",
                                image: "images/设计/2_立面设计/3_风格模式/30_image.png"
                            },
                            {
                                id: 31,
                                title: "风格模式 31",
                                description: "立面风格模式 31",
                                image: "images/设计/2_立面设计/3_风格模式/31_image.png"
                            },
                            {
                                id: 32,
                                title: "风格模式 32",
                                description: "立面风格模式 32",
                                image: "images/设计/2_立面设计/3_风格模式/32_image.png"
                            },
                            {
                                id: 33,
                                title: "风格模式 33",
                                description: "立面风格模式 33",
                                image: "images/设计/2_立面设计/3_风格模式/33_image.png"
                            },
                            {
                                id: 34,
                                title: "风格模式 34",
                                description: "立面风格模式 34",
                                image: "images/设计/2_立面设计/3_风格模式/34_image.png"
                            },
                            {
                                id: 35,
                                title: "风格模式 35",
                                description: "立面风格模式 35",
                                image: "images/设计/2_立面设计/3_风格模式/35_image.png"
                            },
                            {
                                id: 36,
                                title: "风格模式 36",
                                description: "立面风格模式 36",
                                image: "images/设计/2_立面设计/3_风格模式/36_image.png"
                            },
                            {
                                id: 37,
                                title: "风格模式 37",
                                description: "立面风格模式 37",
                                image: "images/设计/2_立面设计/3_风格模式/37_image.png"
                            },
                            {
                                id: 38,
                                title: "风格模式 38",
                                description: "立面风格模式 38",
                                image: "images/设计/2_立面设计/3_风格模式/38_image.png"
                            },
                            {
                                id: 39,
                                title: "风格模式 39",
                                description: "立面风格模式 39",
                                image: "images/设计/2_立面设计/3_风格模式/39_image.png"
                            },
                            {
                                id: 40,
                                title: "风格模式 40",
                                description: "立面风格模式 40",
                                image: "images/设计/2_立面设计/3_风格模式/40_image.png"
                            }
                        ]
                    }
                }
            }
        }
    },

    // 施工部分数据 - 基于实际文件夹结构
    construction: {
        title: "施工",
        // 施工模块切换（根据文件夹结构）
        carousels: {
            tab1: {
                title: "施工目录",
                images: [
                    {
                        id: 1,
                        title: "施工目录",
                        description: "施工流程和目录示意图",
                        image: "images/施工/1_施工目录/1_image.png"
                    }
                ]
            }
            // 注意：2_前期准备目录是空的，所以暂时只有一个切换
            // 如果后期添加了图片，可以添加第二个切换：
            // tab2: {
            //     title: "前期准备",
            //     images: [...]
            // }
        }
    },

    // 轮播图数据 - 使用images/index/目录下的4张图片
    carouselImages: [
        {
            id: 1,
            title: "崇明岛乡村住宅",
            description: "属于一群人的乡村记忆",
            image: "images/index/1_image.png"
        },
        {
            id: 2,
            title: "一站式整体交付",
            description: "包设计、代审批、包施工、陪验收、保售后",
            image: "images/index/2_image.png"
        },
        {
            id: 3,
            title: "多风格设计",
            description: "欧式、新中式、现代、田园等多种风格可选",
            image: "images/index/3_image.png"
        },
        {
            id: 4,
            title: "标准化施工",
            description: "自有团队标准化施工，质量有保障",
            image: "images/index/4_image.png"
        }
    ]
};
