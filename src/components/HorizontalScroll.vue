<template>
    <div>
        <div class="flex items-center overflow-x-auto no-scrollbar" :ref="reference">
            <button class="flex items-center absolute left-6 bg-white mb-4"
                @click.prevent="arrowScrolling('left')"
                :class="{ hidden: hideArrowLeft }">
                <div class="flex justify-center items-center rounded-full h-8 w-8 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -ml-0.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293
                            3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </button>
            <div class="flex space-x-4 mb-4">
                <slot></slot>
            </div>
            <button class="flex items-center absolute right-6 bg-white mb-4"
                @click.prevent="arrowScrolling('right')"
                :class="{ hidden: hideArrowRight }">
                <div class="flex justify-center items-center rounded-full h-8 w-8 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 -mr-0.5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293
                            6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HorizontalScroll',
    props: ['reference'],
    data() {
        return {
            hideArrowLeft: true,
            hideArrowRight: false,
        };
    },
    methods: {
        arrowScrolling(direction) {
            const element = this.$refs[this.reference];
            let left = element.scrollLeft;
            const elementWidth = element.clientWidth - element.clientWidth * 0.2;
            const { clientWidth } = element;
            const maxWidth = element.scrollWidth;
            if (direction === 'right') {
                left += elementWidth;
            }
            if (direction === 'left') {
                left -= elementWidth;
            }
            if ((left + clientWidth) > maxWidth) {
                this.hideArrowLeft = false;
                this.hideArrowRight = true;
            } else if (left > 0 && left < maxWidth) {
                this.hideArrowLeft = false;
                this.hideArrowRight = false;
            } else if (left <= 0) {
                this.hideArrowLeft = true;
                this.hideArrowRight = false;
            }
            element.scroll({
                left,
                behavior: 'smooth',
            });
        },
    },
};
</script>
