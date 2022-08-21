import Logo from "./NavBar/Logo";
import "./App.css";
import DocItem from "./DocumentItem/DocItem";
import Layout from "./Images/Layout.png";
import TablesEx from "./Images/Table Examples 2.png";
import multiplayer from "./Images/Join Multiplayer.png";

const DocItems = [
  {
    title: "Application Layout",
    content:
      "There are a few different pages that users are able to interact with. \n \n Please view the image below that documents how to navigate through the application. \n",
    visualAid: Layout,
    subItems: [{}],
  },
  {
    title: "Database Tables",
    content:
      "ActiveGames and chessGames are the two DynamoDB tables used by the back end for managing the Chess games. \n \nchessGames is used to store the Game Number as the partition key and the game state as key/value pairs. ActiveGames is used to store all users active games for the user, while the chessGames table stores the state of every game. \n \n The ActiveGames table stores the username of the user as the partition key and the unique game number as the sort key. That game number sort key is then used as a pointer to recieve the game state from the chessGames table. \n \n This structure is used to allow for multiple users to view/update a single gameState, provided a one source of truth solution. Please see the image below as an example of how the data is stored and used. \n",
    visualAid: TablesEx,
    subItems: [{}],
  },
  {
    title: "Joining a Multiplayer Game",
    content:
      "To start multiplayer game one user will create a multiplayer game while the other will join the multiplayer game. When a multiplayer game is created a unique game number is generated and the game creator is set as the white player. The black player is left empty until a user joins the game. \n \n The user who created the game will tell their friend what game number to join and that user will enter the game number and click join game. If the game already has user defined as the black player you will recieve an error indicating the game is full.\n \n Please see the below image documenting the wrokflow of two users creating and joinging the game. \n",
    visualAid: multiplayer,
    subItems: [{}],
  },
  {
    title: "API for CRUD Database Entries",
    content: "Content7",
    visualAid: Layout,
    subItems: [
      {
        title: "Create Database",
        content: "Content6",
        visualAid: Layout,
      },
    ],
  },
  {
    title: "API Security",
    content:
      "All API Endpoints are secured with aws cognito. When a Rest API request is called the header will need to contain a valid aws cognito JWT Token. These tokens expire after one hour to ensure this is an active user. \n \n After the API has validated the JWT Token is valid, user data will be passed to the lambda function handling the CRUD. This function will validate with the user data that the user has permission to perform the requested action. ",
    visualAid: Layout,
    subItems: [{}],
  },
  {
    title: "Websocket API",
    content: "Content5",
    visualAid: Layout,
    subItems: [{}],
  },
  {
    title: "Modal Messages",
    content:
      "Here is a capture of every modal message that a user can recieve. This is mostly for reference as the messages are fairly self explanitory. \n",
    visualAid: Layout,
    subItems: [{}],
  },
];

function App() {
  return (
    <div className="App-header">
      {DocItems.map((info) => {
        return (
          <DocItem
            key={info["title"]}
            title={info["title"]}
            content={info["content"]}
            visual={info["visualAid"]}
          >
            {/* {info["subItems"].map((infoSub) => {
              // console.log(infoSub);
              return (
                <DocItem
                  key={infoSub["title"]}
                  title={infoSub["title"]}
                  content={infoSub["content"]}
                  visual={infoSub["visualAid"]}
                ></DocItem>
              );
            })} */}
          </DocItem>
        );
      })}
    </div>
  );
}

export default App;
