import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addwallet, updateWalletPolicy } from "../../../features/walletSlice";

const WhereToShare = () => {
  const navigate = useNavigate();
  const { user } = useParams();
  const dispatch = useDispatch();
  const { walletId } = useParams();
  const { cardWallets } = useSelector((state) => state.wallet);
  const walletToEdit = cardWallets.find(
    (wallet) => wallet.id.toString() === walletId
  );

  const [wallet, setWallet] = useState({
    name: walletToEdit?.name || "",
    type: "card",
    transactionType: walletToEdit?.transactionType || [
      "ecommerce",
      "atm",
      "pos",
      "contactless",
      "wallet_transfer",
    ],
    transactionRules: {
      eitherOfThem: walletToEdit?.transactionRules?.eitherOfThem || [],
      noneOfThem: walletToEdit?.transactionRules?.noneOfThem || [],
    },
    orders: [],
  });

  const [showCompleted, setShowCompleted] = useState(false);

  const allCategories = ["food", "fuel", "hotel", "travel"];

  const [availableCategories, setAvailableCategories] = useState(
    allCategories.filter(
      (category) =>
        !walletToEdit?.transactionRules?.eitherOfThem.includes(category) &&
        !walletToEdit?.transactionRules?.noneOfThem.includes(category)
    )
  );

  const [errors, setErrors] = useState({
    name: "",
    transactionType: "",
    transactionRules: "",
  });

  const transactionTypes = [
    { id: "ecommerce", label: "Ecommerce" },
    { id: "atm", label: "ATM" },
    { id: "pos", label: "POS" },
    { id: "contactless", label: "Contactless" },
    { id: "wallet_transfer", label: "Wallet Transfer" },
  ];

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setErrors((prev) => ({ ...prev, transactionType: "" }));
    setWallet((prev) => ({
      ...prev,
      transactionType: checked
        ? [...prev.transactionType, id]
        : prev.transactionType.filter((type) => type !== id),
    }));
  };
  // Handle & remove category selection
  const handleCategorySelect = (category, ruleType) => {
    setAvailableCategories((prev) => prev.filter((type) => type !== category));
    setWallet((prev) => ({
      ...prev,
      transactionRules: {
        ...prev.transactionRules,
        [ruleType]: [...prev.transactionRules[ruleType], category],
      },
    }));
    setErrors((prev) => ({ ...prev, transactionRules: "" }));
  };

  const removeCategory = (category, ruleType) => {
    setAvailableCategories((prev) => [...prev, category]);
    setWallet((prev) => ({
      ...prev,
      transactionRules: {
        ...prev.transactionRules,
        [ruleType]: prev.transactionRules[ruleType].filter(
          (type) => type !== category
        ),
      },
    }));
  };

  const handleSubmit = () => {
    let newErrors = { name: "", transactionType: "", transactionRules: "" };

    if (!wallet.name) newErrors.name = "Wallet name cannot be empty.";
    if (wallet.transactionType.length === 0)
      newErrors.transactionType =
        "Please select at least one transaction type.";

    setErrors(newErrors);

    if (
      !newErrors.name &&
      !newErrors.transactionType &&
      !newErrors.transactionRules
    ) {
      if (walletId) {
        dispatch(updateWalletPolicy({ wallet, walletId }));
        setShowCompleted(true);
      } else {
        dispatch(addwallet(wallet));
        setShowCompleted(true);
      }
    }
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setWallet({
      name: "",
      type: "card",
      transactionType: [
        "ecommerce",
        "atm",
        "pos",
        "contactless",
        "wallet_transfer",
      ],
      transactionRules: {
        eitherOfThem: [],
        noneOfThem: [],
      },
      orders: [],
    });

    navigate(`/${user}/gifts-&-rewards/dashboard/card/`);
    setShowCompleted(false);
  };

  return (
    <Box
      position={"relative"}
      height={"100%"}
      bgcolor={"#FFFFFF"}
      p={2}
      borderRadius={2}
      mt={2}
    >
      <Typography
        fontSize={"16px"}
        fontFamily={"Gilroy"}
        fontWeight={500}
        color={"#000000"}
      >
        Select card type
      </Typography>
      <Box width={"80%"} mx={"auto"}>
        <Box mt={3}>
          <Typography
            color="#344054"
            fontSize={"20px"}
            fontFamily={"TT Commons"}
            fontWeight={400}
          >
            Wallet Name
          </Typography>
          <TextField
            variant="outlined"
            sx={{
              height: "49.890625px",
              "& .MuiOutlinedInput-root": {
                height: "40px",
                fontSize: "14px",
                borderRadius: "8px",
                width: "643px",
              },
            }}
            value={wallet.name}
            onChange={(e) => {
              setErrors((prev) => ({ ...prev, name: "" }));

              setWallet({ ...wallet, name: e.target.value });
            }}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Box>

        <Box mt={4} display={"grid"} gridTemplateColumns={"1fr 2fr"} gap={2}>
          <Box>
            {" "}
            <Typography
              fontFamily={"Gilroy"}
              fontWeight={500}
              fontSize={"18px"}
              color="#383838"
            >
              Select Transaction Type
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"fit-content"}
            >
              {" "}
              {transactionTypes.map(({ id, label }) => (
                <FormControlLabel
                  key={id}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "18px",
                      fontFamily: "TT Commons",
                      color: "#344054",
                    },
                  }}
                  control={
                    <Checkbox
                      checked={wallet.transactionType.includes(id)}
                      onChange={handleCheckboxChange}
                      id={id}
                      sx={{
                        borderColor: "#6311CB",
                        "&.Mui-checked": {
                          color: "#6311CB",
                        },
                      }}
                    />
                  }
                  label={label}
                />
              ))}
            </Box>
            {errors.transactionType && (
              <Typography color="error">{errors.transactionType}</Typography>
            )}
          </Box>
          <Box>
            <Typography
              fontFamily={"Gilroy"}
              fontWeight={500}
              fontSize={"18px"}
              color="#383838"
            >
              Merchant Transaction Rule
            </Typography>
            {Object.entries(wallet.transactionRules).map(
              ([ruleType, categories]) => (
                <Box key={ruleType} mt={2} display="flex" gap={2}>
                  <Box display={"flex"} flexDirection={"column"} gap={1}>
                    <Typography
                      fontFamily={"TT Commons"}
                      fontSize={"18px"}
                      color={"#344054"}
                    >
                      Transaction rule
                    </Typography>
                    <Typography
                      height={"44px"}
                      border={"1.04px solid #D0D5DD"}
                      borderRadius={"8px"}
                      p={1}
                      whiteSpace={"nowrap"}
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      fontFamily={"TT Commons"}
                      fontSize={"18px"}
                      color={"#6B6B6B"}
                    >
                      {ruleType === "eitherOfThem"
                        ? "Either of them"
                        : "None of them"}
                      <InfoOutlinedIcon
                        sx={{
                          color: "#3725EA",
                          fontSize: "18px",
                        }}
                      />
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    width={"100%"}
                  >
                    <Typography
                      fontFamily={"TT Commons"}
                      fontSize={"18px"}
                      color={"#344054"}
                    >
                      Merchant category
                    </Typography>
                    <Box
                      display="flex"
                      gap={1}
                      flexWrap="wrap"
                      justifyItems={"center"}
                      p={"5px"}
                      height={"44px"}
                      border={"1.04px solid #D0D5DD"}
                      borderRadius={"8px"}
                    >
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant="contained"
                          size="small"
                          disableElevation
                          sx={{
                            background: "#3725EA14",
                            height: "32px",
                            color: "#3725EA",
                            fontWeight: "400",
                            fontFamily: "Geologica",
                            textTransform: "capitalize",
                            borderColor: "#D0D5DD",
                          }}
                          endIcon={<CloseIcon fontSize="small" />}
                          onClick={() => removeCategory(category, ruleType)}
                        >
                          {category}
                        </Button>
                      ))}
                    </Box>
                    <>
                      {availableCategories.length > 0 && (
                        <Box mt={1} display={"flex"} gap={2}>
                          {availableCategories.map((category) => (
                            <Button
                              disableElevation
                              variant="contained"
                              sx={{
                                background: "#F3F3F9",
                                borderRadius: 2,
                                color: "#344054",
                                fontWeight: "400",
                                fontFamily: "Geologica",
                                textTransform: "capitalize",
                              }}
                              key={category}
                              size="small"
                              onClick={() =>
                                handleCategorySelect(category, ruleType)
                              }
                            >
                              {category}
                            </Button>
                          ))}
                        </Box>
                      )}
                    </>
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          maxWidth={"400px"}
          mx={"auto"}
          mt={8}
        >
          <Button
            variant="outlined"
            onClick={() => navigate(`/${user}/gifts-&-rewards/dashboard/card/`)}
            sx={{
              borderColor: "#6311CB",
              color: "#6311CB",
              textTransform: "none",
              px: 4,
              "&:hover": {
                background: "none",
              },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disabled={!wallet.name || !wallet.transactionType.length}
            sx={{
              color: "white",
              px: 4,
              textTransform: "none",
              backgroundColor: "#6311CB",
            }}
            onClick={handleSubmit}
          >
            Save & Proceed
          </Button>
        </Box>
      </Box>
      {showCompleted && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            zIndex: 20,
          }}
        >
          <Box
            sx={{
              height: 240,
              width: 384,
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "12px",
              p: 3,
            }}
          >
            <Box width={"fit-content"} mx={"auto"}>
              <CheckCircleOutlinedIcon
                sx={{ height: "60px", width: "60px", color: "#159F2B" }}
              />
              <Typography
                fontFamily={"Gilroy"}
                fontWeight={"500"}
                fontSize={"24px"}
              >
                All Done!
              </Typography>
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"20px"}
                color="#5C5C5C"
              >
                You're all set and ready to start
              </Typography>
            </Box>
            <Button
              onClick={handleContinue}
              sx={{
                textTransform: "none",
                fontFamily: "Gilroy",
                color: "#6311CB",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: 3,
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WhereToShare;
