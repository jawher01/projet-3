import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import {
  deletePublication,
  getPublication,
} from "../../js/actions/publication";
import { toggleTrue } from "../../js/actions/edit";

const Publication = ({ publication }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.user);

  const isOwner = publication && user && publication.email == user.email;

  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Meta>{publication.name}</Card.Meta>
        <Card.Meta>{publication.email}</Card.Meta>
        <Card.Description>
          <strong>{publication.titre}</strong>
        </Card.Description>

        <Card.Meta>{publication.content}</Card.Meta>
      </Card.Content>
      <Card.Content extra  style={{ display: "flex",  justifyContent: "space-around" }}>
        {isOwner && (
          <div className="ui two buttons">
            <Link to={`publication/edit/${publication._id}`}>
              <Button
                inverted
                color="green"
                onClick={() => {
                  dispatch(getPublication(publication._id));
                  dispatch(toggleTrue());
                }}
              >
                Edit
              </Button>
            </Link>
            <Button
              inverted
              color="red"
              onClick={() => dispatch(deletePublication(publication._id))}
            >
              Delete
            </Button>
          </div>
        )}
         <Button
                inverted
                color="blue"
                onClick={() => {
                  dispatch(getPublication(publication._id));
                
                }}
              >
                comment
              </Button>
      </Card.Content>
    </Card>
  );
};

export default Publication;
