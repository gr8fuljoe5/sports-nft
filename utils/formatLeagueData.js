import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const iconMap = {
  NBA: SportsBasketballIcon,
  MLB: SportsBaseballIcon,
};

export default function formatLeagueData(data) {
  const leagueArr = [];
  data.forEach((item) => {
    leagueArr.push({ icon: iconMap[item.league], leagueInfo: item });
  });
  console.log(leagueArr);
  return leagueArr;
}
