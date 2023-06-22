export const handleMoreInfo = (
  productId: number,
  setActiveProductId: React.Dispatch<React.SetStateAction<number | null>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setActiveProductId(productId);
  setIsModalOpen(true);
};
