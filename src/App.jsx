import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const myPic = `https://media.licdn.com/dms/image/D4D03AQFFov7JZu54Qg/profile-displayphoto-shrink_400_400/0/1667823935550?e=1686182400&v=beta&t=ioXd5MIbYYaPXTTc-SceDVbkSPqgh1lMopqkYFtoKVI`
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  // order matters
  // don't place user JSX before loading or error

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
    <div style={{margin:"20px", border: "2px solid gray", padding:"8px", boxShadow:"0 0 5px" }} ><img style={{width:"140px",borderRadius:"50%"}} src={myPic}  alt="chrisdev" />
        <h2>NSENGIYUMVA CHRISTIAN</h2>
    <h4>study programming at his own</h4>
    <p>a junior software developer from Rwanda who is eager to craft a modern software <br/>application hence contributing his efforts in Rwanda's tech indusrty</p>
    <a href="https://www.linkedin.com/in/nsengiyumva-christian-b9947a233/" target='_blank'  >visit LinkedIn</a> <br/>
    <a href="https://github.com/NSENGIYUMVA-Christian" target='_blank'>visit my gitHub</a></div>
    
    <div style={{margin:"20px", border: "2px solid gray", padding:"8px", boxShadow:"0 0 5px" }} > <img style={{width:"140px",borderRadius:"50%"}} src={avatar_url}  alt={name} />
        <h2>{name}</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p></div>
    </div> 
  );
};
export default App;

