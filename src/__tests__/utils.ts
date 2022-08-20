let TEST_CANVAS: HTMLCanvasElement = null;
let context: CanvasRenderingContext2D = null;

/**
 * function to create a 450px/450px canvas for tests. If canvas exists return existing one and it's context.
 * @returns HTMLCanvasElement
 */
export function getCanvasAndContext() {
    if (TEST_CANVAS === null) {
        TEST_CANVAS = document.createElement('canvas');
        document.body.appendChild(TEST_CANVAS);
    }
    if (context === null) {
        context = TEST_CANVAS.getContext("2d");
    }
    TEST_CANVAS.width = 450;
    TEST_CANVAS.height = 450;
    
    return [TEST_CANVAS, context];
}