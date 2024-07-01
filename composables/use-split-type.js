import SplitType from "split-type";

// Split type class : .split-type
// Line class : .split-type--line-wrapper
// Word class : .split-type--word
// Char class : .split-type--char
export default () => {
    const splits = ref(null)

    const initSplitType = () => { 
        createSplit()
        // Reset split type on screen resize
        window.addEventListener("resize", resetSplit)
    }

    const createSplit = () => {
        splits.value = SplitType.create('.split-type', {
            types: 'lines, words',
            lineClass: 'split-type--line-wrapper',
            wordClass: 'split-type--word'
        }) 

        wrapSplitedLines()
    }

    const wrapSplitedLines = () => {
        // Wrap each line inside a div to allow text reveal by line
        document.querySelectorAll('.split-type--line-wrapper')
            .forEach(function(lineWrapper){
                // Create div
                var line = document.createElement('div')
                line.classList.add('split-type--line')
                line.innerHTML = lineWrapper.innerHTML
                // Insert created div inside line wrapper
                lineWrapper.innerHTML = ""
                lineWrapper.appendChild(line)
            })
    }

    const revertSplit = () => {
        SplitType.revert('.split-type') 
    }

    const resetSplit = () => {
        revertSplit()
        createSplit()
    }

    const destroySplitType = () => {
        revertSplit()
        window.removeEventListener("resize", resetSplit)
    }

    return { 
        initSplitType,
        destroySplitType
    }
}