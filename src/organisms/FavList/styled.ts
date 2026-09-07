import styled from "styled-components";

export const FavWrapper = styled.div`
.favList{
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    
}
.favList__content{
    position: relative;
    max-height: 200px;
    overflow-y: scroll !important;
    &::-webkit-scrollbar{
        display: none;
    }
}
.favList__content_item{
    padding: 0.4rem;
    justify-content: space-between;
    align-items: center;
    h3{
        color: #424383;
    }
    button{
        font-size: 1.3rem;
        transition: .4s ease;
        opacity: 0;
    }
    &:not(:last-child){
        border-bottom: 1px solid #dadada;
    }
    &:hover{
        button{opacity: 1;}
    }
}


`