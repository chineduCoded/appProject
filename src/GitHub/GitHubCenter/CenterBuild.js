import React from 'react'
import CenterTop from "./CenterTop"
import CenterBottom from './CenterBottom'
import styled from 'styled-components'
import img from "../GitHubImage/co-authoring.png"
import img1 from "../GitHubImage/pr-checks.png"
import img2 from "../GitHubImage/syntax-highlighting.png"

const CenterBuild = () => {
    return (
        <Container>
            <Wrapper>
                <CenterTop />
                <CenterDiv>
                    <CenterBottom 
                    img={img}
                    text="Attribute commits with collaborators easily"
                    para="Quickly add co-authors to 
                    your commit. Great for pairing 
                    and excellent for sending a 
                    little love/credit to that 
                    special someone who helped fix 
                    that gnarly bug of yours. 
                    See the attribution on 
                    the history page, undo an accidental 
                    attribution, and see the co-authors on github.com"
                    />

                    <CenterBottom clr
                    img={img1}
                    text="Checkout branches with pull requests and view CI statuses"
                    para="See all open pull requests for your repositories and 
                    check them out as if they were a local branch, 
                    even if they're from upstream branches or forks. 
                    See which pull requests pass commit status checks, too!"
                    />

                    <CenterBottom 
                    img={img2}
                    text="Syntax highlighted diffs"
                    para="The new GitHub Desktop supports syntax highlighting 
                    when viewing diffs for a variety of different languages."
                    />
                </CenterDiv>
            </Wrapper>
        </Container>
    )
}

export default CenterBuild

const Container = styled.div`
    width: 100%;
`;

const Wrapper = styled.div``;

const CenterDiv = styled.div``;