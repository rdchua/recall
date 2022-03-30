import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { getMonth, getYear } from "date-fns";
import React, { ComponentProps, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const StyledDatepicker = styled(DatePicker)`
  font-family: "Circular Std";
  padding: 8px 16px;
  border: 1px solid var(--chakra-colors-neutral-300);
  border-radius: 8px;
  max-width: 193px;

  :focus {
    outline: none;
    border: 2px solid var(--chakra-colors-blue-500) !important;
  }

  ::placeholder {
    color: var(--chakra-colors-neutral-500);
  }
`;

const renderDay = (dayOfMonth: number, date: Date) => {
  return (
    <Text
      color="neutral.800"
      fontWeight="400"
      fontSize="15px"
      fontFamily="Circular Std"
      m="0"
    >
      {dayOfMonth}
    </Text>
  );
};

const renderCalendarContainer = ({ className, children }: any) => {
  return (
    <Box backgroundColor="white">
      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </Box>
  );
};

const Datepicker = ({
  onChange,
  ...props
}: ComponentProps<typeof DatePicker>) => {
  const [startDate, setStartDate] = useState(new Date());
  const years = [1990];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <StyledDatepicker
      autoComplete="off"
      className="datepicker"
      {...props}
      onChange={onChange}
      calendarContainer={renderCalendarContainer}
      renderDayContents={renderDay}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          bg="white"
        >
          <Box
            p={1}
            w="auto"
            bg="white"
            boxShadow="0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
            border="1px solid #F6F6F9"
            borderRadius={10}
            aria-label="prev-month"
            onClick={decreaseMonth}
          >
            <RiArrowLeftSLine fontSize={16} />
          </Box>

          <Text fontWeight={700} fontSize="md">
            {date.toLocaleDateString()}
          </Text>

          <Box
            p={1}
            w="auto"
            bg="white"
            boxShadow="0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)"
            border="1px solid #F6F6F9"
            borderRadius={10}
            aria-label="next-month"
            onClick={increaseMonth}
          >
            <RiArrowRightSLine fontSize={16} />
          </Box>
        </Flex>
      )}
    />
  );
};

export default Datepicker;
