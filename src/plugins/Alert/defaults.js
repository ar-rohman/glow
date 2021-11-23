export default {
    group: '',
    position: 'top-center',
    maxAlerts: 10,
    duration: 3000, //  3s
    alertIcon: false,
    clean: false,
    type: '',
    // Animation
    enterActiveClassDelayed: 'transform ease-out duration-300 transition delay-300',
    enterActiveClass: 'transform ease-out duration-300 transition',
    enterClass: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4',
    enterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
    leaveActiveClass: 'transition ease-in duration-500',
    leaveClass: 'opacity-100',
    leaveToClass: 'opacity-0',
    moveClass: 'transition duration-500',
};
