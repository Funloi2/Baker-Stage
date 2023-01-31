<?php

namespace App\Entity;

use App\Repository\CompanyRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CompanyRepository::class)]
class Company
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(nullable: true)]
    private ?int $phone = null;

    #[ORM\Column(length: 255)]
    private ?string $sector = null;

    #[ORM\Column(length: 255)]
    private ?string $typeOfActivity = null;

    #[ORM\Column(length: 255)]
    private ?string $detailOfActivity = null;

    #[ORM\Column(length: 255)]
    private ?string $BRN = null;

    #[ORM\Column]
    private ?int $TAN = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $dateOfClosing = null;

    #[ORM\Column(length: 3)]
    private ?string $currency = null;

    #[ORM\Column(length: 255)]
    private ?string $mainBusinessOfActivity = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(?int $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getSector(): ?string
    {
        return $this->sector;
    }

    public function setSector(string $sector): self
    {
        $this->sector = $sector;

        return $this;
    }

    public function getTypeOfActivity(): ?string
    {
        return $this->typeOfActivity;
    }

    public function setTypeOfActivity(string $typeOfActivity): self
    {
        $this->typeOfActivity = $typeOfActivity;

        return $this;
    }

    public function getDetailOfActivity(): ?string
    {
        return $this->detailOfActivity;
    }

    public function setDetailOfActivity(string $detailOfActivity): self
    {
        $this->detailOfActivity = $detailOfActivity;

        return $this;
    }

    public function getBRN(): ?string
    {
        return $this->BRN;
    }

    public function setBRN(string $BRN): self
    {
        $this->BRN = $BRN;

        return $this;
    }

    public function getTAN(): ?int
    {
        return $this->TAN;
    }

    public function setTAN(int $TAN): self
    {
        $this->TAN = $TAN;

        return $this;
    }

    public function getDateOfClosing(): ?\DateTimeInterface
    {
        return $this->dateOfClosing;
    }

    public function setDateOfClosing(\DateTimeInterface $dateOfClosing): self
    {
        $this->dateOfClosing = $dateOfClosing;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getMainBusinessOfActivity(): ?string
    {
        return $this->mainBusinessOfActivity;
    }

    public function setMainBusinessOfActivity(string $mainBusinessOfActivity): self
    {
        $this->mainBusinessOfActivity = $mainBusinessOfActivity;

        return $this;
    }
}
