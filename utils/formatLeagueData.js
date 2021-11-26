import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";

const iconMap = {
  NBA: SportsBasketballIcon,
  MLB: SportsBaseballIcon,
  NFL: SportsFootballIcon,
  NHL: SportsHockeyIcon,
  MLS: SportsSoccerIcon,
};

export default function formatLeagueData(data) {
  const leagueArr = [];
  data.forEach((item) => {
    leagueArr.push({
      icon: iconMap[item.league] || SportsBaseballIcon,
      leagueInfo: item,
    });
  });
  return leagueArr;
}
