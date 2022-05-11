import { Animator, batch, Fade, FadeIn, Move, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn } from "react-scroll-motion";



const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn())
const FadeUp = batch(Fade(0, 1), Sticky(), Move())


const Scroll = () => {
    return (<>
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Sticky(), Fade(), MoveOut(2, -100))}>
                    <h1>hi there!</h1>
                </Animator>
            </ScrollPage>
        </ScrollContainer>

        <ScrollContainer>
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <h1>let me show you something!</h1>
                </Animator>
            </ScrollPage>
        </ScrollContainer>


        <ScrollContainer>
            <ScrollPage page={2}>
                <Animator animation={FadeUp}>
                    <h1>let's Go!!</h1>
                </Animator>
            </ScrollPage>
        </ScrollContainer>


        <ScrollContainer>
            <ScrollPage page={3}>
                <div className="page3">
                    <h2>
                        <Animator animation={MoveIn(-100, 100, -1000)}>i'm asia</Animator>
                        <Animator animation={MoveIn(100, 100)}>fresh graduated..</Animator>
                        <Animator animation={MoveIn(-1000, 0)}>pasionated UI/UX designer!</Animator>
                    </h2>
                </div>
            </ScrollPage>
        </ScrollContainer>


        <ScrollContainer>
            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky())}>
                    <h1>.....</h1>
                </Animator>
            </ScrollPage>
        </ScrollContainer>

    </>
    )
}

export default Scroll;