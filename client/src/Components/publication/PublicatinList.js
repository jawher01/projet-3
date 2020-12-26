import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllPublications } from "../../js/actions/publication"
import { useEffect } from 'react';
import { Spinner } from "react-bootstrap"
import Publication from "./Publication"
import { Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { toggleFalse } from "../../js/actions/edit";
import Navbar from "../NavBar"


const PublicatinList = () => {
    const dispatch = useDispatch();
    const publications = useSelector(state => state.publicationReducer.publication);

    const loadPublications = useSelector(state => state.publicationReducer.loadPublications);
    useEffect(() => {
        dispatch(getAllPublications());
    }, []);
    return (
        <div>
            <Navbar/>
          <Button inverted color="blue" onClick={() => dispatch(toggleFalse())}>
          <Link to="/publication/add"> Add PUBLICATION</Link>
        </Button>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {loadPublications ? <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> : publications.map(el => <Publication key={el._id} publication={el} />)}
            
        </div>
        </div>
    )
}

export default PublicatinList
