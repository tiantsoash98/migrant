// https://codepen.io/GreenSock/pen/qBWqJyy
// Cursor class : .cursor
export default () => {
    const { gsap } = useGsap()
    const cursor = ref(null)
    const posX = ref(0), posY = ref(0)
    const mouseX = ref(0), mouseY = ref(0)

    const initCursor = () => {
        cursor.value = document.querySelector('.cursor')

        gsap.to({}, {
            duration: 0.016,
            repeat: -1,
            onRepeat: function () {
                posX.value += (mouseX.value - posX.value) / 9;
                posY.value += (mouseY.value - posY.value) / 9;

                gsap.set(cursor.value, {
                    left: posX.value,
                    top: posY.value
                })
            }
        })

        initCursorBehavior()
    }

    function initCursorBehavior () {
        document.addEventListener('mousemove', (e) => {
            mouseX.value = e.clientX
            mouseY.value = e.clientY
        })
        
        // Hide on leave
        document.addEventListener('mouseleave', (e) => {
            cursor.value.classList.add("cursor--hidden")
        })

        // Show on enter
        document.addEventListener('mouseenter', (e) => {
            cursor.value.classList.remove("cursor--hidden")
        })
    }

    const destroyCursor = () => {
        // Resets cursor therefore remove all listeners
        cursor.value = null
    }


    return {
        initCursor,
        destroyCursor
    }
}