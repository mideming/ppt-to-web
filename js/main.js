// 主JavaScript文件 - 崇明岛乡村住宅项目

// 轮播图功能
class Carousel {
    constructor() {
        this.slidesContainer = document.getElementById('carouselSlides');
        this.dotsContainer = document.getElementById('carouselDots');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlide = 0;
        this.slides = [];
        this.dots = [];
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        this.createSlides();
        this.createDots();
        this.setupEventListeners();
        this.showSlide(this.currentSlide);
        this.startAutoPlay();
    }

    createSlides() {
        projectData.carouselImages.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'carousel-slide';

            // 设置背景图片 - 使用contain显示完整图片
            if (slide.image) {
                slideElement.style.background = `url('${slide.image}') center/contain no-repeat`;
                slideElement.style.backgroundColor = '#f8f9fa'; // 添加背景色
            } else {
                // 回退到纯色背景
                const backgrounds = [
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                ];
                slideElement.style.background = backgrounds[index % backgrounds.length];
            }

            const content = document.createElement('div');
            content.className = 'carousel-slide-content';
            content.innerHTML = `
                <h2>${slide.title}</h2>
                <p>${slide.description}</p>
            `;

            slideElement.appendChild(content);
            this.slidesContainer.appendChild(slideElement);
            this.slides.push(slideElement);
        });
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('data-index', index);
            dot.addEventListener('click', () => this.showSlide(index));
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // 鼠标悬停时暂停自动播放
        this.slidesContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.slidesContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showSlide(index) {
        // 确保索引在有效范围内
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;

        // 更新当前幻灯片索引
        this.currentSlide = index;

        // 移动幻灯片容器
        this.slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        // 更新指示点状态
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    startAutoPlay() {
        this.stopAutoPlay(); // 先停止现有的自动播放
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// 内容渲染功能
// 注意：诉求、设计、施工部分现在都由各自的Tabs和Carousel类管理
// 通过HTML模板和JavaScript动态生成，不再需要ContentRenderer渲染
class ContentRenderer {
    constructor() {
        // 注意：所有内容现在都由各自的Tabs和Carousel类管理
        // ContentRenderer不再渲染任何内容
        console.log('[ContentRenderer] 初始化 - 注意：所有内容现在都由各自的Tabs和Carousel类管理');
    }

    renderAllContent() {
        // 注意：所有内容现在都由各自的Tabs和Carousel类管理
        // ContentRenderer不再渲染任何内容
        console.log('[ContentRenderer] renderAllContent - 所有内容现在都由各自的Tabs和Carousel类管理');
    }

    // 以下方法已移除，因为所有内容现在都由各自的类管理
    // renderDemands() - 由 DemandsTabs 和 DemandsCarousel 类管理
    // renderDesign() - 将由 DesignTabs 和 DesignCarousel 类管理（待实现）
    // renderConstruction() - 由 ConstructionTabs 和 ConstructionCarousel 类管理（待实现）
}

// 诉求模块切换功能
class DemandsTabs {
    constructor() {
        this.tabs = document.querySelectorAll('.demands-tab');
        this.tabContents = document.querySelectorAll('.demands-tab-content');
        this.carousels = {}; // 存储每个tab的轮播图实例

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAllCarousels();
        this.showTab('tab1'); // 默认显示第一个tab
    }

    setupEventListeners() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                this.showTab(tabId);
            });
        });
    }

    showTab(tabId) {
        // 更新tab按钮状态
        this.tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 显示对应的内容
        this.tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // 移除自动播放控制
        // this.stopAllCarousels();

        // 移除自动播放启动
        // if (this.carousels[tabId]) {
        //     this.carousels[tabId].startAutoPlay();
        // }
    }

    initAllCarousels() {
        console.log(`[DemandsTabs] 开始初始化所有轮播图`);

        // 为每个tab初始化轮播图
        for (let i = 1; i <= 6; i++) {
            const tabId = `tab${i}`;
            const slidesContainer = document.getElementById(`demandsCarouselSlides${i}`);
            const dotsContainer = document.getElementById(`demandsCarouselDots${i}`);
            const prevBtn = document.querySelector(`#${tabId} .demands-carousel-btn.prev`);
            const nextBtn = document.querySelector(`#${tabId} .demands-carousel-btn.next`);

            console.log(`[DemandsTabs] 初始化 ${tabId}:`);
            console.log(`  - slidesContainer:`, slidesContainer ? '找到' : '未找到');
            console.log(`  - dotsContainer:`, dotsContainer ? '找到' : '未找到');
            console.log(`  - prevBtn:`, prevBtn ? '找到' : '未找到');
            console.log(`  - nextBtn:`, nextBtn ? '找到' : '未找到');

            if (slidesContainer && dotsContainer) {
                console.log(`[DemandsTabs] 创建 DemandsCarousel 实例: ${tabId}`);
                this.carousels[tabId] = new DemandsCarousel(
                    tabId,
                    slidesContainer,
                    dotsContainer,
                    prevBtn,
                    nextBtn
                );
            } else {
                console.log(`[DemandsTabs] 跳过 ${tabId}，缺少必要元素`);
            }
        }

        console.log(`[DemandsTabs] 初始化完成，创建了 ${Object.keys(this.carousels).length} 个轮播图`);
    }

    stopAllCarousels() {
        Object.values(this.carousels).forEach(carousel => {
            if (carousel && typeof carousel.stopAutoPlay === 'function') {
                carousel.stopAutoPlay();
            }
        });
    }
}

// 诉求模块轮播图（简化版，不需要自动播放控制）
class DemandsCarousel {
    constructor(tabId, slidesContainer, dotsContainer, prevBtn, nextBtn) {
        this.tabId = tabId;
        this.slidesContainer = slidesContainer;
        this.dotsContainer = dotsContainer;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.currentSlide = 0;
        this.slides = [];
        this.dots = [];
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        console.log(`[DemandsCarousel] 初始化轮播图: ${this.tabId}`);
        console.log(`[DemandsCarousel] 幻灯片容器:`, this.slidesContainer);
        console.log(`[DemandsCarousel] 数据:`, projectData.demands.carousels[this.tabId]);

        this.createSlides();
        this.createDots();
        this.setupEventListeners();
        this.showSlide(this.currentSlide);
        // 移除自动播放，改为手动切换
        // this.startAutoPlay();

        console.log(`[DemandsCarousel] 轮播图 ${this.tabId} 初始化完成，有 ${this.slides.length} 张幻灯片`);
    }

    createSlides() {
        const carouselData = projectData.demands.carousels[this.tabId];
        if (!carouselData || !carouselData.images) return;

        carouselData.images.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'demands-carousel-slide';

            // 设置背景图片 - 使用contain显示完整图片
            if (slide.image) {
                slideElement.style.background = `url('${slide.image}') center/contain no-repeat`;
                slideElement.style.backgroundColor = '#f8f9fa'; // 添加背景色
            } else {
                // 回退到纯色背景
                const backgrounds = [
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                ];
                slideElement.style.background = backgrounds[index % backgrounds.length];
            }

            // 移除文字内容，只保留图片
            // 不再创建文字内容元素

            this.slidesContainer.appendChild(slideElement);
            this.slides.push(slideElement);
        });
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'demands-carousel-dot';
            dot.setAttribute('data-index', index);
            dot.addEventListener('click', () => this.showSlide(index));
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    }

    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // 移除自动播放相关的事件监听器
        // this.slidesContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        // this.slidesContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showSlide(index) {
        // 确保索引在有效范围内
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;

        // 更新当前幻灯片索引
        this.currentSlide = index;

        // 移动幻灯片容器
        this.slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        // 更新指示点状态
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    startAutoPlay() {
        this.stopAutoPlay(); // 先停止现有的自动播放
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// 导航功能
class Navigation {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navLinks = document.querySelector('.nav-links');
        this.navItems = document.querySelectorAll('.nav-links a');

        this.setupEventListeners();
        this.setupSmoothScroll();
    }

    setupEventListeners() {
        this.menuToggle.addEventListener('click', () => {
            this.navLinks.classList.toggle('active');
            this.menuToggle.innerHTML = this.navLinks.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // 点击导航链接后关闭移动端菜单
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (this.navLinks.classList.contains('active')) {
                    this.navLinks.classList.remove('active');
                    this.menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }

    setupSmoothScroll() {
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = item.getAttribute('href');
                if (targetId.startsWith('#')) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}


// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    // 初始化轮播图
    const carousel = new Carousel();
    window.carouselInstance = carousel; // 保存到全局，方便键盘控制

    // 初始化内容渲染
    const renderer = new ContentRenderer();

    // 初始化诉求模块切换
    const demandsTabs = new DemandsTabs();

    // 初始化设计模块切换
    const designTabs = new DesignTabs();

    // 初始化施工模块切换
    const constructionTabs = new ConstructionTabs();

    // 初始化导航
    const navigation = new Navigation();


    // 添加滚动时导航栏样式变化
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 控制台欢迎信息
    console.log('%c崇明岛乡村住宅项目已加载完成！', 'color: #3498db; font-size: 16px; font-weight: bold;');
    console.log('%c基于《崇明岛乡村住宅》PPT研究报告制作', 'color: #7f8c8d;');
});

// 添加键盘控制轮播图
document.addEventListener('keydown', (e) => {
    const carousel = window.carouselInstance;
    if (carousel) {
        if (e.key === 'ArrowLeft') {
            carousel.prevSlide();
        } else if (e.key === 'ArrowRight') {
            carousel.nextSlide();
        }
    }
});

// 将carousel实例暴露给全局，方便键盘控制
window.carouselInstance = null;

// 施工模块切换功能
class ConstructionTabs {
    constructor() {
        this.tabs = document.querySelectorAll('.demands-tab');
        this.tabContents = document.querySelectorAll('.demands-tab-content');
        this.carousels = {}; // 存储每个tab的轮播图实例

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAllCarousels();
        this.showTab('tab1'); // 默认显示第一个tab
    }

    setupEventListeners() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                this.showTab(tabId);
            });
        });
    }

    showTab(tabId) {
        // 更新tab按钮状态
        this.tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 显示对应的内容
        this.tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    initAllCarousels() {
        console.log(`[ConstructionTabs] 开始初始化所有轮播图`);

        // 为每个tab初始化轮播图
        const constructionData = projectData.construction;

        Object.keys(constructionData.carousels).forEach(tabKey => {
            const slidesContainer = document.getElementById(`constructionCarouselSlides${tabKey.replace('tab', '')}`);
            const dotsContainer = document.getElementById(`constructionCarouselDots${tabKey.replace('tab', '')}`);
            const prevBtn = document.querySelector(`#${tabKey} .demands-carousel-btn.prev`);
            const nextBtn = document.querySelector(`#${tabKey} .demands-carousel-btn.next`);

            console.log(`[ConstructionTabs] 初始化 ${tabKey}:`);
            console.log(`  - slidesContainer:`, slidesContainer ? '找到' : '未找到');
            console.log(`  - dotsContainer:`, dotsContainer ? '找到' : '未找到');
            console.log(`  - prevBtn:`, prevBtn ? '找到' : '未找到');
            console.log(`  - nextBtn:`, nextBtn ? '找到' : '未找到');

            if (slidesContainer && dotsContainer) {
                console.log(`[ConstructionTabs] 创建 ConstructionCarousel 实例: ${tabKey}`);
                this.carousels[tabKey] = new ConstructionCarousel(
                    tabKey,
                    slidesContainer,
                    dotsContainer,
                    prevBtn,
                    nextBtn
                );
            } else {
                console.log(`[ConstructionTabs] 跳过 ${tabKey}，缺少必要元素`);
            }
        });

        console.log(`[ConstructionTabs] 初始化完成，创建了 ${Object.keys(this.carousels).length} 个轮播图`);
    }
}

// 施工模块轮播图
class ConstructionCarousel {
    constructor(tabId, slidesContainer, dotsContainer, prevBtn, nextBtn) {
        this.tabId = tabId;
        this.slidesContainer = slidesContainer;
        this.dotsContainer = dotsContainer;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.currentSlide = 0;
        this.slides = [];
        this.dots = [];
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        console.log(`[ConstructionCarousel] 初始化轮播图: ${this.tabId}`);
        this.createSlides();
        this.createDots();
        this.setupEventListeners();
        this.showSlide(this.currentSlide);
        // 手动切换，不自动播放
        // this.startAutoPlay();

        console.log(`[ConstructionCarousel] 轮播图 ${this.tabId} 初始化完成，有 ${this.slides.length} 张幻灯片`);
    }

    createSlides() {
        const constructionData = projectData.construction;
        const carouselData = constructionData.carousels[this.tabId];

        if (!carouselData || !carouselData.images) {
            console.error(`[ConstructionCarousel] 找不到轮播图数据: ${this.tabId}`);
            return;
        }

        carouselData.images.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'demands-carousel-slide';

            // 设置背景图片 - 使用contain显示完整图片
            if (slide.image) {
                slideElement.style.background = `url('${slide.image}') center/contain no-repeat`;
                slideElement.style.backgroundColor = '#f8f9fa'; // 添加背景色
            } else {
                // 回退到纯色背景
                const backgrounds = [
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                ];
                slideElement.style.background = backgrounds[index % backgrounds.length];
            }

            // 移除文字内容，只保留图片
            this.slidesContainer.appendChild(slideElement);
            this.slides.push(slideElement);
        });
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'demands-carousel-dot';
            dot.setAttribute('data-index', index);
            dot.addEventListener('click', () => this.showSlide(index));
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    }

    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // 移除自动播放相关的事件监听器
        // this.slidesContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        // this.slidesContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showSlide(index) {
        // 确保索引在有效范围内
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;

        // 更新当前幻灯片索引
        this.currentSlide = index;

        // 移动幻灯片容器
        this.slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        // 更新指示点状态
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    startAutoPlay() {
        this.stopAutoPlay(); // 先停止现有的自动播放
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// 设计模块切换功能（两级结构）- 新版（二级菜单在左边）
class DesignTabs {
    constructor() {
        this.primaryTabs = document.querySelectorAll('.design-primary-tab');
        this.secondaryTabsContainers = {
            tab1: document.getElementById('secondaryTabsTab1'),
            tab2: document.getElementById('secondaryTabsTab2')
        };
        this.secondaryTabs = document.querySelectorAll('.design-secondary-tab');
        this.secondaryContents = document.querySelectorAll('.design-secondary-tab-content');
        this.carousels = {}; // 存储每个二级tab的轮播图实例

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAllCarousels();
        this.showPrimaryTab('tab1'); // 默认显示第一个一级tab
        this.showSecondaryTab('tab1_1'); // 默认显示第一个二级tab
    }

    setupEventListeners() {
        // 一级tab点击事件
        this.primaryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                this.showPrimaryTab(tabId);
            });
        });

        // 二级tab点击事件
        this.secondaryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                this.showSecondaryTab(tabId);
            });
        });
    }

    showPrimaryTab(tabId) {
        // 更新一级tab按钮状态
        this.primaryTabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 显示/隐藏对应的二级tab容器
        Object.keys(this.secondaryTabsContainers).forEach(key => {
            const container = this.secondaryTabsContainers[key];
            if (key === tabId) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });

        // 切换到该一级tab下的第一个二级tab
        const firstSecondaryTab = document.querySelector(`#secondaryTabs${tabId.charAt(0).toUpperCase() + tabId.slice(1)} .design-secondary-tab.active`);
        if (firstSecondaryTab) {
            const secondaryTabId = firstSecondaryTab.getAttribute('data-tab');
            this.showSecondaryTab(secondaryTabId);
        } else {
            // 如果没有激活的二级tab，激活第一个
            const firstTab = document.querySelector(`#secondaryTabs${tabId.charAt(0).toUpperCase() + tabId.slice(1)} .design-secondary-tab`);
            if (firstTab) {
                const secondaryTabId = firstTab.getAttribute('data-tab');
                this.showSecondaryTab(secondaryTabId);
            }
        }
    }

    showSecondaryTab(tabId) {
        // 获取对应的二级tab按钮
        const secondaryTab = document.querySelector(`.design-secondary-tab[data-tab="${tabId}"]`);
        if (!secondaryTab) return;

        // 获取该二级tab所属的一级tab
        const container = secondaryTab.closest('.design-secondary-tabs');
        const primaryTabId = container.id.replace('secondaryTabs', '').toLowerCase();

        // 更新所有二级tab按钮状态（只更新当前一级tab下的）
        const secondaryTabsInCurrentPrimary = container.querySelectorAll('.design-secondary-tab');
        secondaryTabsInCurrentPrimary.forEach(tab => {
            if (tab.getAttribute('data-tab') === tabId) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // 显示对应的二级内容，隐藏其他所有二级内容
        this.secondaryContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    initAllCarousels() {
        console.log(`[DesignTabs] 开始初始化所有轮播图`);

        // 为每个二级tab初始化轮播图
        const designData = projectData.design;

        // 遍历所有一级tab
        Object.keys(designData.primaryTabs).forEach(primaryTabKey => {
            const primaryTab = designData.primaryTabs[primaryTabKey];

            // 遍历该一级tab下的所有二级tab
            Object.keys(primaryTab.secondaryTabs).forEach(secondaryTabKey => {
                // 注意：secondaryTabKey格式如"tab1_1"
                // 对应的HTML元素ID是"designCarouselSlides1_1"（去掉"tab"前缀）
                const slidesId = `designCarouselSlides${secondaryTabKey.replace('tab', '')}`;
                const dotsId = `designCarouselDots${secondaryTabKey.replace('tab', '')}`;

                const slidesContainer = document.getElementById(slidesId);
                const dotsContainer = document.getElementById(dotsId);
                const prevBtn = document.querySelector(`#${secondaryTabKey} .design-carousel-btn.prev`);
                const nextBtn = document.querySelector(`#${secondaryTabKey} .design-carousel-btn.next`);

                console.log(`[DesignTabs] 初始化 ${secondaryTabKey}:`);
                console.log(`  - slidesContainer ID: ${slidesId}`, slidesContainer ? '找到' : '未找到');
                console.log(`  - dotsContainer ID: ${dotsId}`, dotsContainer ? '找到' : '未找到');
                console.log(`  - prevBtn:`, prevBtn ? '找到' : '未找到');
                console.log(`  - nextBtn:`, nextBtn ? '找到' : '未找到');

                if (slidesContainer && dotsContainer) {
                    console.log(`[DesignTabs] 创建 DesignCarousel 实例: ${secondaryTabKey}`);
                    this.carousels[secondaryTabKey] = new DesignCarousel(
                        secondaryTabKey,
                        slidesContainer,
                        dotsContainer,
                        prevBtn,
                        nextBtn
                    );
                } else {
                    console.log(`[DesignTabs] 跳过 ${secondaryTabKey}，缺少必要元素`);
                }
            });
        });

        console.log(`[DesignTabs] 初始化完成，创建了 ${Object.keys(this.carousels).length} 个轮播图`);
    }
}

// 设计模块轮播图
class DesignCarousel {
    constructor(tabId, slidesContainer, dotsContainer, prevBtn, nextBtn) {
        this.tabId = tabId;
        this.slidesContainer = slidesContainer;
        this.dotsContainer = dotsContainer;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.currentSlide = 0;
        this.slides = [];
        this.dots = [];
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        console.log(`[DesignCarousel] 初始化轮播图: ${this.tabId}`);
        this.createSlides();
        this.createDots();
        this.setupEventListeners();
        this.showSlide(this.currentSlide);
        // 手动切换，不自动播放
        // this.startAutoPlay();

        console.log(`[DesignCarousel] 轮播图 ${this.tabId} 初始化完成，有 ${this.slides.length} 张幻灯片`);
    }

    createSlides() {
        // 从数据结构中获取图片数据
        // tabId格式：tab1_1, tab1_2, tab1_3, tab2_1, tab2_2, tab2_3
        // 注意：tabId已经是完整的键，如tab1_1
        const designData = projectData.design;

        // 找到对应的二级tab
        let secondaryTab = null;
        let primaryTabKey = null;

        // 遍历所有一级tab
        for (const [pKey, primaryTab] of Object.entries(designData.primaryTabs)) {
            if (primaryTab.secondaryTabs && primaryTab.secondaryTabs[this.tabId]) {
                secondaryTab = primaryTab.secondaryTabs[this.tabId];
                primaryTabKey = pKey;
                break;
            }
        }

        if (!secondaryTab || !secondaryTab.images) {
            console.error(`[DesignCarousel] 找不到二级tab或图片数据: ${this.tabId}`);
            return;
        }

        secondaryTab.images.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = 'design-carousel-slide';

            // 设置背景图片 - 使用contain显示完整图片
            if (slide.image) {
                slideElement.style.background = `url('${slide.image}') center/contain no-repeat`;
                slideElement.style.backgroundColor = '#f8f9fa'; // 添加背景色
            } else {
                // 回退到纯色背景
                const backgrounds = [
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
                ];
                slideElement.style.background = backgrounds[index % backgrounds.length];
            }

            // 移除文字内容，只保留图片
            this.slidesContainer.appendChild(slideElement);
            this.slides.push(slideElement);
        });
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = 'design-carousel-dot';
            dot.setAttribute('data-index', index);
            dot.addEventListener('click', () => this.showSlide(index));
            this.dotsContainer.appendChild(dot);
            this.dots.push(dot);
        });
    }

    setupEventListeners() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // 移除自动播放相关的事件监听器
        // this.slidesContainer.addEventListener('mouseenter', () => this.stopAutoPlay());
        // this.slidesContainer.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    showSlide(index) {
        // 确保索引在有效范围内
        if (index < 0) index = this.slides.length - 1;
        if (index >= this.slides.length) index = 0;

        // 更新当前幻灯片索引
        this.currentSlide = index;

        // 移动幻灯片容器
        this.slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        // 更新指示点状态
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.showSlide(this.currentSlide + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlide - 1);
    }

    startAutoPlay() {
        this.stopAutoPlay(); // 先停止现有的自动播放
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

