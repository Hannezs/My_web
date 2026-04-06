document.addEventListener('DOMContentLoaded', () => {
    // 机械臂已改为侧面工业风并取消微互动，此处的JS逻辑已移除或仅保留其他功能的 逻辑
    
    // 滚动动画：苹果风格的元素渐显上浮效果
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 当元素进入视口时，移除隐藏和偏移的类，添加完全显示的类
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 元素出现10%时触发，增强对小元素的兼容
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
