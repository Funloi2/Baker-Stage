<?php

namespace App\Controller;

use App\Entity\Company;
use ContainerVDnhTl4\getDoctrine_Orm_DefaultEntityManagerService;

use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;


class CompanyController extends AbstractController
{
  public $Doctrine;
  public $manager;
  private $em;

  public function __construct(EntityManagerInterface $em)
  {
    $this->em = $em;
  }
    #[Route('/company', name: 'app_company')]
    public function index(): JsonResponse
    {
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/CompanyController.php',
        ]);
    }

    //Api to create a company
  #[Route('/company/postCompany', name: 'postCompany', methods: ['POST'])]
  public function postCompany(Request $request, ManagerRegistry $doctrine): JsonResponse
  {
    $company = new Company();
    $entityManager = $doctrine->getManager();
    $param = json_decode($request->getContent(), true);
    $company->setName($param['name']);
    $company->setEmail($param['email']);
    $company->setPhone($param['phone']);
    $company->setSector($param['sector']);
    $company->setTypeOfActivity($param['typeOfActivity']);
    $company->setDetailOfActivity($param['DetailOfActivity']);
    $company->setBRN($param['BRN']);
    $company->setTAN($param['TAN']);
    $date = new \DateTime($param['dateOfClosing']);
    $company->setDateOfClosing($date);
    $company->setCurrency($param['currency']);
    $company->setMainBusinessOfActivity($param['mainBusinessOfActivity']);
    $entityManager->persist($company);
    $entityManager->flush();
    return $this->json('Company added successfully');
  }

  //Api to edit a company
  #[Route('/company/updateCompany/{id}', name: 'updateCompany', methods: ['PUT'])]
  public function updateCompany(Request $request, ManagerRegistry $doctrine, $id): JsonResponse
  {
    $entityManager = $doctrine->getManager();
    $company = $entityManager->getRepository(Company::class)->find($id);
    $param = json_decode($request->getContent(), true);
    $company->setName($param['name']);
    $company->setEmail($param['email']);
    $company->setPhone($param['phone']);
    $company->setSector($param['sector']);
    $company->setTypeOfActivity($param['typeOfActivity']);
    $company->setDetailOfActivity($param['DetailOfActivity']);
    $company->setBRN($param['BRN']);
    $company->setTAN($param['TAN']);
    $date = new \DateTime($param['dateOfClosing']);
    $company->setDateOfClosing($date);
    $company->setCurrency($param['currency']);
    $company->setMainBusinessOfActivity($param['mainBusinessOfActivity']);
    $entityManager->persist($company);
    $entityManager->flush();
    return $this->json('Company updated successfully');
  }

  //Api to delete a company
  #[Route('/company/deleteCompany/{id}', name: 'deleteCompany', methods: ['DELETE'])]
  public function deleteCompany(ManagerRegistry $doctrine, $id): JsonResponse
  {
    $entityManager = $doctrine->getManager();
    $company = $entityManager->getRepository(Company::class)->find($id);

    $entityManager->remove($company);
    $entityManager->flush();
    return $this->json('Company deleted successfully');
  }

  //Api to get all companies
  #[Route('/company/getCompany', name: 'getCompany', methods: ['GET'])]
  public function getCompany(ManagerRegistry $doctrine): JsonResponse
  {
    $entityManager = $doctrine->getManager();
    $company = $entityManager->getRepository(Company::class)->findAll();

    foreach ($company as $d){
      $res[] = [
        'id' => $d->getId(),
        'name' => $d->getName(),
        'email' => $d->getEmail(),
        'phone' => $d->getPhone(),
        'sector' => $d->getSector(),
        'typeOfActivity' => $d->getTypeOfActivity(),
        'detailOfActivity' => $d->getDetailOfActivity(),
        'BRN' => $d->getBRN(),
        'TAN' => $d->getTAN(),
        'dateOfClosing' => $d->getDateOfClosing(),
        'currency' => $d->getCurrency(),
        'mainBusinessOfActivity' => $d->getMainBusinessOfActivity(),
      ];
    }
    return $this->json(
      $res
    );
  }
}
