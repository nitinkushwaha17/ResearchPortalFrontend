import React from "react";
import {
	makeStyles,
	useTheme,
	useMediaQuery,
} from "@material-ui/core";
import { useEffect } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import chatHead from "../../Assets/triangle_timeline.png";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
	timeline: {
		margin: "0 auto",
		[theme.breakpoints.down("sm")]: {
			margin: "4% 0",
		},
	},
	oppositeContentLeft: {
		transform: "translate(-5% , 5%)",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	oppositeContentRight: {
		transform: "translate(5% ,5%)",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	time: {
		color: "#4499fe",
		fontWeight: "bold",
	},
	left: {
		height: "20px",
		filter: "invert(100%)",
		transform: "rotate(180deg) translate(2rem,0)",
		margin: "0px",
		padding: "0px",
	},
	right: {
		height: "20px",
		filter: "invert(100%)",
		transform: " translate(2rem,0)",
		margin: "0px",
		padding: "0px",
	},
	paper: {
		backgroundColor: "linear-gradient",
		borderRadius: "8px",
		height: "100%",
		minHeight: "20rem",
		margin: "auto 2rem",
		padding: "6px 16px",
	},
	secondaryTail: {
		backgroundColor: theme.palette.secondary.main,
	},
	spacing: {
		marginBottom: "10rem",
	},
	title: {
		textDecoration: "underline",
		marginBottom: "1rem",
	},
	body: {
		padding: "1rem",
		fontFamily: "Roboto, sans-serif",
	},
}));

const SLIDE_INFO = [
	{
		title: "TechX 2020",
		body: "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response.IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young Professionals from various IEEE Sections and students branches.",
		time: "July,2021",
	},
	{
		title: "IntelliSys",
		body: "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT DuIntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response.rgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young Professionals from various IEEE Sections and students branches. ",
		time: "June,2021",
	},
	{
		title: "SDV 2.0",
		body: "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response.Professionals from various IEEE Sections and students branches.",
		time: "May,2021",
	},
	{
		title: "IntelliSys",
		body: "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young Professionals from various IEEE IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response.Sections and students branches. ",
		time: "Jan,2021",
	},
	{
		title: "IntelliSys",
		body: "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young IntelliSys:Machine Learning Symposium was a huge success with a colossal turnout of over 150 enthusiasts who were too eager to learn and explore.IEEE SB NIT Durgapur extends its heartfelt gratitude to our guest speakers, Dr. Fakhral Yusoff and Mr. Shivam Abhilash for leaving us all dazzled and especially to all the participants for their overwhelming response. Professionals from various IEEE Sections and students branches. ",
		time: "April,2020",
	},
	{
		title: "IntelliSys",
		body: "IEEE COMPUTER SOCIETY SYP MGAB in collaboration with IEEE SB NIT Durgapur and IEEE SB Jadavpur University hosted the IEEE TechX Congress 2020: Eastern India Techno-Management Leadership Summit on 28th Feb - 1st March 2020, where it assimilated all students and Young Professionals from various IEEE Sections and students branches.",
		time: "Aug,2020",
	},
];

export default function MilestonesTimeline() {
	useEffect(() => {
		aos.init({ duration: 2000 });
	}, []);
	const animationDirection = (index) => {
		if (index % 2 == 0) {
			return "fade-right";
		}
		return "fade-left";
	};
	const classes = useStyles();
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
	if (smallScreen) {
		return (
			<Timeline className={classes.timeline}>
				{SLIDE_INFO.map((slide, index) => (
					<TimelineItem >
						<TimelineOppositeContent
							className={
								index % 2 == 0
									? classes.oppositeContentLeft
									: classes.oppositeContentRight
							}
						>
							<Typography
								variant="body2"
								color="textSecondary"
								className={classes.time}
							>
								{slide.time}
							</Typography>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="primary" />
							<TimelineConnector data-aos="fade-down"/>
						</TimelineSeparator>
						<TimelineContent data-aos="fade-left">
							<Paper elevation={5} className={classes.paper}>
								<img
									src={chatHead}
									alt="chatHead"
									className={index % 2 == 0 ? classes.left : classes.right}
								/>
								<Typography
									align="center"
									className={classes.title}
									variant="h4"
									component="p"
								>
									{slide.title}
								</Typography>
								<Typography
									align="center"
									className={classes.body}
									variant="body"
									component="body"
								>
									{slide.body}
								</Typography>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		);
	}
	return (
		<Timeline align="alternate" className={classes.timeline}>
			{SLIDE_INFO.map((slide, index) => (
				<TimelineItem >
					<TimelineOppositeContent
						data-aos={animationDirection(index+1)}
						className={
							index % 2 == 0
								? classes.oppositeContentLeft
								: classes.oppositeContentRight
						}
					>
						<Typography
							variant="body2"
							color="textSecondary"
							className={classes.time}
						>
							{slide.time}
						</Typography>
					</TimelineOppositeContent>
					<TimelineSeparator data-aos="fade-down">
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent data-aos={animationDirection(index)}>
						<Paper elevation={5} className={classes.paper}>
							<img
								src={chatHead}
								alt="chatHead"
								className={index % 2 == 0 ? classes.left : classes.right}
							/>
							<Typography
								align="center"
								className={classes.title}
								variant="h4"
								component="p"
							>
								{slide.title}
							</Typography>
							<Typography
								align="center"
								className={classes.body}
								variant="body"
								component="body"
							>
								{slide.body}
							</Typography>
						</Paper>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	);
}
